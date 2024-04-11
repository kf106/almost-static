const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
// provide a unique port for the server to run un
const PORT = process.env.PORT || 8997

// data will be saved in a csv file using a separator character
const separator = ';'

// the static page is at ./public/index.html
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/subscribe', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const currentDate = new Date()
  fs.appendFile('./signups.txt', name + separator + email + separator + currentDate + '\n', (err) => {
    if (err) {
      // this is run if the form processing fails
      console.log(err)
    } else {
      // this is run if the form is successfully appended to the database.txt file
      console.log('\nFile contents after append:\n',
        fs.readFileSync('./signups.txt', 'utf8'))
    }
  })
  res.redirect('/subscribed.html')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
