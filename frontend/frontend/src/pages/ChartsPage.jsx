import React, { useEffect, useState } from 'react';
import { fetchAggregated } from '../services/diagnosticService';
import LatencyChart from './LatencyChart';
import { Box, TextField, FormControl, InputLabel, MenuItem, Select, CircularProgress, Typography } from '@mui/material';

export default function ChartsPage() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchAggregated({ city, state });
        setData(res); 
      } catch (err) {
        console.error("Erro ao buscar dados agregados:", err);
        setError("Erro ao carregar dados.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [city, state]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Gráfico de Latência por Dia</h2>

      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <FormControl>
          <InputLabel>Estado</InputLabel>
          <Select
            value={state}
            label="Estado"
            onChange={(e) => setState(e.target.value)}
            sx={{ width: 120 }}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="SP">SP</MenuItem>
            <MenuItem value="RJ">RJ</MenuItem>
            <MenuItem value="BA">BA</MenuItem>
            <MenuItem value="MG">MG</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box sx={{ display: 'flex', justifyContent: 'center', color: 'red' }}>
          <Typography variant="h6">{error}</Typography>
        </Box>
      )}

      {!loading && !error && data && (
        <LatencyChart data={data} />
      )}
    </div>
  );
}
