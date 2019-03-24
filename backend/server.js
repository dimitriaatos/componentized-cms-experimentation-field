const express = require('express'),
  path = require('path')

const app = express(),
  staticPath = path.join(__dirname, './../frontend/dist')

app.use(express.static(staticPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('http://localhost:3000/'))
