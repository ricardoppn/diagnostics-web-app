import React, { useEffect, useState } from 'react';
import { fetchDiagnostics } from "../services/diagnosticService";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TextField, Select,
  MenuItem, Pagination, Box, InputLabel, FormControl,
  Typography, Skeleton, Autocomplete, Chip, IconButton,
  Tooltip
} from '@mui/material';
import {
  Download as DownloadIcon,
  Refresh as RefreshIcon,
  FilterAlt as FilterIcon
} from '@mui/icons-material';

export default function DiagnosticsTable() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  
  const totalPages = Math.ceil(totalItems / limit);

  const fetchData = async () => {
    setLoading(true);
    try {
      const params = { page, limit, city, state };
      const res = await fetchDiagnostics(params);
      
      setData(res.data);
      setTotalItems(res.total);
      
      
      if (page === 1) {
        const uniqueCities = [...new Set(res.data.map(item => item.city))];
        setCities(uniqueCities);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setData([]);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, limit, city, state]);

  const handleRefresh = () => {
    setPage(1);
    fetchData();
  };

  const getQualityColor = (quality) => {
    if (quality >= 90) return 'success';
    if (quality >= 70) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header com título e ações */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 3 
      }}>
        <Typography variant="h5" component="h1" fontWeight="bold">
          Diagnósticos de Rede
        </Typography>
        
        <Box>
          <Tooltip title="Recarregar dados">
            <IconButton onClick={handleRefresh} color="primary" sx={{ mr: 1 }}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Filtros */}
      <Paper elevation={1} sx={{ p: 2, mb: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Typography variant="subtitle1" sx={{ mr: 1 }}>
            <FilterIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
            Filtros:
          </Typography>
          
          <Autocomplete
            freeSolo
            options={cities}
            value={city}
            onChange={(_, newValue) => {
              setCity(newValue || '');
              setPage(1);
            }}
            renderInput={(params) => (
              <TextField 
                {...params} 
                label="Cidade" 
                size="small"
                sx={{ width: 200 }}
              />
            )}
          />
          
          <FormControl size="small" sx={{ width: 120 }}>
            <InputLabel>Estado</InputLabel>
            <Select
              value={state}
              label="Estado"
              onChange={(e) => {
                setState(e.target.value);
                setPage(1);
              }}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="SP">SP</MenuItem>
              <MenuItem value="RJ">RJ</MenuItem>
              <MenuItem value="MG">MG</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ width: 150 }}>
            <InputLabel>Itens por página</InputLabel>
            <Select
              value={limit}
              label="Itens por página"
              onChange={(e) => {
                setLimit(e.target.value);
                setPage(1);
              }}
            >
              <MenuItem value={5}>5 itens</MenuItem>
              <MenuItem value={10}>10 itens</MenuItem>
              <MenuItem value={20}>20 itens</MenuItem>
              <MenuItem value={50}>50 itens</MenuItem>
            </Select>
          </FormControl>
          
          {(city || state) && (
            <Chip 
              label="Limpar filtros" 
              onClick={() => {
                setCity('');
                setState('');
                setPage(1);
              }}
              color="default"
              variant="outlined"
              sx={{ ml: 'auto' }}
            />
          )}
        </Box>
      </Paper>

      {/* Status e contagem */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        {loading ? (
          <Skeleton width={200} height={24} />
        ) : (
          <Typography variant="body2" color="text.secondary">
            Mostrando {data.length} de {totalItems} registros
          </Typography>
        )}
        
        <Typography variant="body2" color="text.secondary">
          Página {page} de {totalPages}
        </Typography>
      </Box>

      {/* Tabela */}
      <TableContainer 
        component={Paper}
        sx={{ 
          maxHeight: 'calc(100vh - 320px)',
          overflow: 'auto',
          '& .MuiTableRow-root:hover': {
            backgroundColor: 'action.hover'
          }
        }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow sx={{ 
              '& .MuiTableCell-head': { 
                fontWeight: 'bold',
                backgroundColor: 'primary.main',
                color: 'common.white'
              }
            }}>
              <TableCell>ID</TableCell>
              <TableCell>Dispositivo</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Latência (ms)</TableCell>
              <TableCell align="right">Perda (%)</TableCell>
              <TableCell align="right">Qualidade</TableCell>
              <TableCell>Data/Hora</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {loading ? (
              [...Array(limit)].map((_, index) => (
                <TableRow key={`skeleton-${index}`}>
                  {[...Array(8)].map((_, i) => (
                    <TableCell key={i}>
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : data.length > 0 ? (
              data.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Chip 
                      label={row.device} 
                      size="small" 
                      color="default" 
                      variant="outlined" 
                    />
                  </TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell align="right" sx={{ 
                    color: row.latency_ms > 100 ? 'error.main' : 'inherit',
                    fontWeight: row.latency_ms > 100 ? 'bold' : 'normal'
                  }}>
                    {row.latency_ms.toFixed(2)}
                  </TableCell>
                  <TableCell align="right" sx={{ 
                    color: row.packet_loss > 5 ? 'error.main' : 'inherit',
                    fontWeight: row.packet_loss > 5 ? 'bold' : 'normal'
                  }}>
                    {row.packet_loss}%
                  </TableCell>
                  <TableCell align="right">
                    <Chip 
                      label={`${row.quality_of_service}%`} 
                      size="small" 
                      color={getQualityColor(row.quality_of_service)}
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(row.date).toLocaleString('pt-BR')}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center" sx={{ py: 4 }}>
                  <Typography variant="body1" color="text.secondary">
                    Nenhum dado encontrado
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Paginação */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mt: 2,
        pt: 2,
        borderTop: '1px solid',
        borderColor: 'divider'
      }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, val) => setPage(val)}
          color="primary"
          showFirstButton
          showLastButton
          size="medium"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            '& .MuiPaginationItem-root': {
              fontSize: '0.875rem'
            }
          }}
        />
      </Box>
    </Box>
  );
}