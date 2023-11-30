import mysql, { Pool } from 'mysql2/promise';

const pool: Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hangry_case_study',
});

export default pool;