// Bringing in express, establishing port and creating express app
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express();
const apiRoutes = require('./routes/api-routes')

// Utilizing express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes)

// Running on port 3001
app.listen(PORT, () => {
    console.log(`Server is now running on ${PORT}`)
})