const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require('web3');
const truffle_connect = require('./connection/app.js');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.



// app.use('/', express.static('public_static'));

// app.get('/getFace', (req, res) => {
//   truffle_connect.start(function (answer) {
//     res.send(answer);
//   })
// });




app.post('/getFace', (req, res) => {
  console.log("**** POST /getFace ****");
  console.log(req.body);
  const data=({faceId : req.body.face_id,
   faceName : req.body.name});


      res.status(200).send(data);
      console.log(res.status)
    });
 


// app.post('/sendCoin', (req, res) => {
//   console.log("**** GET /sendCoin ****");
//   console.log(req.body);

//   let amount = req.body.amount;
//   let sender = req.body.sender;
//   let receiver = req.body.receiver;

//   truffle_connect.sendCoin(amount, sender, receiver, (balance) => {
//     res.send(balance);
//   });
// });

app.listen(port, () => {

  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_connect.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  console.log("Express Listening at http://localhost:" + port);

});
