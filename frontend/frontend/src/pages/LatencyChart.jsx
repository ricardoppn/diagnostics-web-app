// src/pages/LatencyChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LatencyChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total_latency" fill="#8884d8" name="Latência (ms)" />
        <Bar dataKey="total_packet_loss" fill="#82ca9d" name="Perda de Pacotes (%)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
