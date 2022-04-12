require("dotenv").config();

module.exports = {
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database:"proyectDB",
        host: "localhost",
    }  
}