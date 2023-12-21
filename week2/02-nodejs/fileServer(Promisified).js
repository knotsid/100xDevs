/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = 3000

const filesDir = './files/'

// Endpoint 1: GET /files
app.get('/files', async function (req, res) {
  try {
    const files = await fs.readdir(filesDir);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).send('Internal server error');
  }
})

// Endpoint 2: GET /file/:filename
app.get('/file/:filename', async function (req, res) {
  const fileName = req.params.filename
  const filePath = path.join(filesDir, fileName)
  try {
    const data = await fs.readFile(filePath, 'utf-8')
    res.status(200).send(data)
  } catch (err) {
    // console.error('Error reading file:', err);
    if (err.code === 'ENOENT') {
      res.status(404).send('File not found');
    } else {
      res.status(500).send('Internal server error');
    }
  }
})

// Default 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// start the server
app.listen(PORT, function () {
  console.log(`server running on port : ${PORT}`)
})

module.exports = app;