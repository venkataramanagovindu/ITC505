const express = require('express')
const logger = require('morgan')
const path = require('path')

// Create an Express server
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
let port = process.env.PORT || 80
if (process.argv[2] === 'local') {
  port = 8080
}

// Route to handle form submission
server.post('/ITC505/lab-7', (req, res) => {
  const { adjective1, noun1, verb1, place, adjective2, noun2, adjective3, noun3, verb2 } = req.body
  if (!adjective1 || !noun1 || !verb1 || !place || !adjective2 || !noun2 || !adjective3 || !noun3 || !verb2) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `)
    return
  }
  const madLib = `Once upon a time, a ${adjective1} ${noun1} decided to ${verb1} to the ${place}. Along the way, they encountered a ${adjective2} ${noun2} who offered them a ${adjective3} ${noun3}. Intrigued, the ${noun1} accepted the gift and continued on their journey. When they finally arrived at the ${place}, they used the ${noun3} to ${verb2} the local ${noun2}. The entire ${place} was amazed by the ${adjective2} feat, and they all celebrated by ${verb2} together.`
  res.send(`
    <h1>Submission Successful</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `)
})

// Additional routes from the second script
server.get('/home', (req, res) => {
  res.status(200).send('Welcome to Home Page')
})

server.get('/set-cookie', (req, res) => {
  res.setHeader('Set-Cookie', 'name=Venkat; email=venkat@example.com')
  res.send('Cookies set')
})

server.get('/get-cookie', (req, res) => {
  const cookies = req.headers.cookie
  const cookiesArray = cookies ? cookies.split('; ').map(cookie => `<li>${cookie}</li>`) : []
  res.send(`
    <html>
    <head>
      <title>Cookies Retrieved</title>
      <style>
        body { font-family: Arial, sans-serif; }
        .container { margin: 20px; }
        h1 { color: #333; }
        ul { list-style-type: none; padding: 0; }
        li { background: #f2f2f2; margin: 5px 0; padding: 10px; border: 1px solid #ccc; border-radius: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Cookies Retrieved</h1>
        ${cookiesArray.length > 0 ? `<ul>${cookiesArray.join('')}</ul>` : '<p>No cookies found.</p>'}
        <a href="/home">Go to Home</a>
      </div>
    </body>
    </html>
  `)
})

// Page not found handler
server.use((req, res) => {
  res.status(404).send('Page Not Found')
})

// Start the server
server.listen(port, () => console.log(`Server is running on port ${port}`))