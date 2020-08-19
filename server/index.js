// Dependency
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

/* Route for Photo Gallery Component */

/* Route for Calendar Component */

// GET request to '/rooms/:room_id/reservation' route
app.get('/rooms/:room_id/reservation', (req, res) => {
  let room_id = req.params.room_id;
  axios.get(`http://localhost:3002/rooms/${room_id}/reservation`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// POST request to '/rooms/:room_id/reservation' route
app.post('/rooms/:room_id/reservation', (req, res) => {
  let room_id = req.params.room_id;
  // declare the reservation data to post
  let reservation = {
    check_in: req.body.check_in,
    check_out: req.body.check_out
  }
  axios.post(`http://localhost:3002/rooms/${room_id}/reservation`, reservation)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

/* Route for Reviews Component */

/* Route for Image Carousel Component */

// Start server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});