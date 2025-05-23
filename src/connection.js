import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PASSWORD
})

export default connection