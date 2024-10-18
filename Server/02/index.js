import express from 'express'
import pg from 'pg'
import {config} from 'dotenv'

const app = express()

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/db', async (req, res) => {
    const result = await pool.query('SELECT NOW()') 
    res.json(result.rows[0]);
});

const port = 2998
app.listen(port)
console.log('server on port', port)