var express = require('express');
var router = express.Router();

//include the database connection
const database = require('../database')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', (req, res, next) => {
  const userEmail = req.body.user_email_address;
  const userPassword = req.body.user_password;
  // console.log(userEmail);
  // console.log(userPassword);
  if (userEmail && userPassword) {
    //write my query 
    // i could srite it on the databse side, but we aren't doing that right now 
    myQuery = `
SELECT * FROM Person
WHERE email = "${userEmail}"
`;

    database.query(myQuery, (err, data) => {
      //checking to make sure we got data back
      if (data.length > 0) {
        //now lets varify if password is correct 
        if (data[0].password === userPassword) {
          console.log(data);
          console.log("Welcome to the Place")
          res.redirect('/')
        } else {
          console.log('Incorrect Password')
          res.send("incorrect password")
        }
      } else {
        console.log('incorrect email');
        res.send('incorrect email');
      }
    })

  }
})

module.exports = router;