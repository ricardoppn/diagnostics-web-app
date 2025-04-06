DROP TABLE IF EXISTS diagnostics;

CREATE TABLE diagnostics (
    id SERIAL PRIMARY KEY,
    device_id VARCHAR(50),
    city VARCHAR(100),
    state VARCHAR(50),
    latency_ms FLOAT,
    packet_loss FLOAT,
    quality_of_service FLOAT,
    date TIMESTAMP
);

INSERT INTO diagnostics (device_id, city, state, latency_ms, packet_loss, quality_of_service, date)
VALUES 
('router-06', 'Santos', 'SP', 45.0, 0.3, 90.0, '2025-04-04 12:00:00'),
('router-07', 'Campinas', 'SP', 32.1, 0.2, 92.5, '2025-04-05 08:30:00'),
('router-08', 'Niterói', 'RJ', 38.6, 0.4, 87.0, '2025-04-06 14:00:00'),
('router-09', 'Petrópolis', 'RJ', 40.2, 0.6, 80.0, '2025-04-07 09:00:00'),
('router-10', 'Uberlândia', 'MG', 55.3, 1.0, 75.0, '2025-04-08 17:00:00'),
('router-11', 'Contagem', 'MG', 47.1, 0.8, 78.5, '2025-04-09 11:00:00'),
('router-12', 'Feira de Santana', 'BA', 42.0, 0.9, 81.0, '2025-04-10 10:00:00'),
('router-13', 'Ilhéus', 'BA', 39.5, 0.7, 83.2, '2025-04-11 15:30:00'),
('router-14', 'Porto Alegre', 'RS', 30.0, 0.2, 91.5, '2025-04-12 16:00:00'),
('router-15', 'Caxias do Sul', 'RS', 36.4, 0.3, 88.8, '2025-04-13 09:30:00'),
('router-16', 'Curitiba', 'PR', 28.9, 0.1, 96.0, '2025-04-14 13:20:00'),
('router-17', 'Londrina', 'PR', 33.2, 0.4, 89.4, '2025-04-15 11:45:00'),
('router-18', 'Recife', 'PE', 48.5, 1.1, 72.0, '2025-04-16 10:10:00'),
('router-19', 'Olinda', 'PE', 44.0, 0.9, 75.5, '2025-04-17 14:25:00'),
('router-20', 'Fortaleza', 'CE', 52.3, 1.3, 69.0, '2025-04-18 09:05:00'),
('router-21', 'Juazeiro do Norte', 'CE', 49.8, 1.0, 71.8, '2025-04-19 12:50:00'),
('router-22', 'Brasília', 'DF', 26.5, 0.0, 99.0, '2025-04-20 08:15:00'),
('router-23', 'Brasília', 'DF', 29.4, 0.2, 97.0, '2025-04-21 18:10:00'),
('router-24', 'Goiânia', 'GO', 37.6, 0.6, 84.0, '2025-04-22 16:45:00'),
('router-25', 'Anápolis', 'GO', 35.9, 0.4, 86.2, '2025-04-23 10:30:00'),
('router-26', 'Manaus', 'AM', 60.5, 1.5, 65.0, '2025-04-24 07:40:00'),
('router-27', 'Manacapuru', 'AM', 58.2, 1.4, 67.0, '2025-04-25 13:55:00');
