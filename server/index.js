// Dependency
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Route

// Start server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});