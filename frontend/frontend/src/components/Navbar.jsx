// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Navbar() {
  const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Diagnóstico de Rede
        </Typography>
        <Button 
          color="inherit" 
          component={Link} 
          to="/"
          sx={{ fontWeight: location.pathname === "/" ? "bold" : "normal" }}>
            Tabela
          </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/charts"
          sx={{ fontWeight: location.pathname === "/charts" ? "bold" : "normal" }}>
            Gráficos
          </Button>
      </Toolbar>
    </AppBar>
  );
}
