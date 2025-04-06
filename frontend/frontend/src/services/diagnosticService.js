const API_BASE_URL = "http://localhost:5000/api";

// Função para buscar os diagnósticos
export async function fetchDiagnostics({ page = 1, limit = 10, city = "", state = "" }) {
  const params = new URLSearchParams({ page, limit, city, state });
  const response = await fetch(`${API_BASE_URL}/diagnostics?${params}`);

  if (!response.ok) throw new Error("Erro ao buscar diagnósticos");
  return await response.json();
}

// Função para buscar dados agregados
export async function fetchAggregated({ city = "", state = "" }) {
  const params = new URLSearchParams({ city, state });
  const response = await fetch(`${API_BASE_URL}/aggregated?${params}`);

  if (!response.ok) throw new Error("Erro ao buscar dados agregados");
  return await response.json();
}
