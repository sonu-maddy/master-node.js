const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router)





//---------------------------------------------------------------------------------------------//



// 1️⃣ Middleware to log every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next() // go to next handler
})

// 2️⃣ Middleware to check authentication
function checkAuth(req, res, next) {
  const isLoggedIn = false // change to true to test
  if (isLoggedIn) {
    next() // allow request
  } else {
    res.status(401).send('Unauthorized: Please log in first!')
  }
}

// 3️⃣ Route without authentication
app.get('/', (req, res) => {
  res.send('Welcome to Home Page')
})

// 4️⃣ Route with authentication middleware
app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Welcome to Dashboard!')
})

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
