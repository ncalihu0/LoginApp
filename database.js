//grabs the npm module we installed, related to mySQL
const mysql = require('mysql2');

//we're setting a connection from our databse so we have it here 
//we're making an object our database info in order to use it when we use the variable connection 
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'LoginApp',
    user: 'root',
    password: 'PTV5573@rose'
});

//with our connection which has our login info, we when connect it, if succesful it display a connection in our terminal
//otherwise it thows an error
connection.connect(function (err) {
    if (err) throw err;
    console.log("MySQL Database is Connected!!!!!")
})

module.exports = connection;