import mysql2 from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
}).promise();

export default db;