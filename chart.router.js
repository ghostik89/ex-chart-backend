const {Router} = require('express')
const mysql = require('mysql2')
const router = Router()
require('dotenv').config()

const pool = mysql.createPool({
    connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "chart_db",
    password: process.env.DB_PASSWORD
});

// /api/chart/all - collect all data about ide usage
router.get('/all', async (req,res) => {
    try{
        pool.query('select * from chart_data;',
            [],async (err,data) => {
                return err? res.status(500).json({message:err}):
                    res.json(data);
            })
    }catch (e) {
        return res.status(500).json({message: 'Internal server error'})
    }
})

// /api/chart/webstorm - collect all data about ide usage

module.exports = router
