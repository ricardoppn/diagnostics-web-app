# app/services/disnostic_services.py

from app.database import get_connection
from app.models.diagnostic_model import Diagnostic

class DiagnosticServices:
    @staticmethod
    def get_paginated_diagnostics(page=1, limit=10, city=None, state=None):
        
        page = max(1, int(page))
        limit = max(1, min(int(limit), 100))
        offset = (page - 1) * limit

        base_query = """
            SELECT id, device_id, city, state, latency_ms, packet_loss, quality_of_service, date
            FROM diagnostics
        """
        count_query = "SELECT COUNT(*) FROM diagnostics"
        
        filters = []
        params = []

        if city:
            filters.append("city = %s")
            params.append(city)
        if state:
            filters.append("state = %s")
            params.append(state)

        if filters:
            where_clause = " WHERE " + " AND ".join(filters)
            base_query += where_clause
            count_query += where_clause

        base_query += " ORDER BY date DESC LIMIT %s OFFSET %s"
        params.extend([limit, offset])

        try:
            conn = get_connection()
            cur = conn.cursor()

            cur.execute(base_query, params)
            rows = cur.fetchall()
            diagnostics = [Diagnostic(*row).to_dict() for row in rows]

            cur.execute(count_query, params[:-2])  
            total = cur.fetchone()[0]

            return {
                "data": diagnostics,
                "total": total,
                "page": page,
                "limit": limit
            }
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
        finally:
            if cur: cur.close()
            if conn: conn.close()
        
    @staticmethod
    def get_aggregated(city=None, state=None):
        base_query = """
            SELECT DATE(date) as day,
                SUM(latency_ms) as total_latency,
                SUM(packet_loss) as total_loss
            FROM diagnostics
        """

        filters = []
        params = []

        if city:
            filters.append("city = %s")
            params.append(city)

        if state:
            filters.append("state = %s")
            params.append(state)

        if filters:
            base_query += " WHERE " + " AND ".join(filters)

        base_query += " GROUP BY day ORDER BY day"

        conn = get_connection()
        cur = conn.cursor()
        cur.execute(base_query, params)
        rows = cur.fetchall()
        cur.close()
        conn.close()

        return [
            {
                "day": row[0].isoformat(),
                "total_latency": row[1],
                "total_packet_loss": row[2]
            }
            for row in rows
        ]
