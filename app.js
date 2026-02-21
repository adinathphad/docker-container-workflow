// Import Express framework
const express = require('express')

// Import OS module to get container hostname
const os = require('os')

// Get the hostname of the container
const hostname = os.hostname()

// Create Express application
const app = express()

// Define route for root URL "/"
app.get('/', function(req, res) {
  // Send response including container hostname
  res.send('Hello world from ' + hostname + '! Your app is up and running!\n')
})

// Start server on port 8080
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})
