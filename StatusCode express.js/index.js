const express = require('express')
const app = express()

// ✅ 200 - OK
app.get('/', (req, res) => {
  res.status(200).send('Success! This is the home page.')
})

// ✅ 201 - Created
app.post('/user', (req, res) => {
  res.status(201).send('User created successfully!')
})

// ✅ 400 - Bad Request
app.get('/bad-request', (req, res) => {
  res.status(400).send('Bad Request: Something is wrong with your input.')
})

// ✅ 401 - Unauthorized
app.get('/private', (req, res) => {
  res.status(401).send('Unauthorized: You must log in first.')
})

// ✅ 404 - Not Found
app.get('/not-found', (req, res) => {
  res.status(404).send('Error: Page not found.')
})

// ✅ 500 - Internal Server Error
app.get('/error', (req, res) => {
  res.status(500).send('Server error! Please try again later.')
})

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
