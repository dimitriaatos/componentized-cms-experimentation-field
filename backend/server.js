const express = require('express'),
  {pagePath, imagesPath} = require('./paths'),
  routes = require('./routing')

const app = express()

// Development dependencies 
const morgan = require('morgan')
app.use(morgan('tiny'))

// Static directories
app.use(express.static(pagePath))
app.use('/images', express.static(imagesPath))

app.use('/', routes)

app.listen(3000, () => console.log('http://localhost:3000/'))

module.exports = {pagePath, imagesPath}