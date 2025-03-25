const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'food_zone',
    password:'monisha@282003'

})

connection.connect((err)=>{
    if(err)console.log(err);
    console.log("connected to food zone DB");
})

module.exports = connection