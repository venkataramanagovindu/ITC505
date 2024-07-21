const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))
// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})
// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))
// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = process.env.PORT || 80;
if (process.argv[2] === 'local') {
  port = 8080
}


// Route to handle form submission
server.post('/ITC505/lab-7/submit', (req, res) => {
  const { noun1, verb1, adjective1, noun2, place } = req.body;
  if (!noun1 || !verb1 || !adjective1 || !noun2 || !place) {
      res.send(`
          <h1>Submission Failed</h1>
          <p>Please fill out ALL fields</p>
          <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
      `);
      return;
  }
  const madLib = `Once upon a time, a ${adjective1} ${noun1} decided to ${verb1} with some ${noun2} at the ${place}.`;
  res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `);
});


server.listen(port, () => console.log(`Server is running on port ${port}`));

// server.listen(port, () => console.log('Ready on localhost!'))