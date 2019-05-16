const path = require('path'),
bodyParser = require('body-parser'),
router = require('express').Router(),
{pagePath} = require('./paths'),
asyncHandler = require('express-async-handler')

const h = require('./helpers')
const { save, get } = require('./storage')

const user = {
  username: 'dimitriaatos',
  email: 'd.a.ellinas@gmail.com',
  password: 'los',
}

// Body parser
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.text())

const secretkey = 'secretkey'

const parseToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization
  // console.log(bearerHeader);
  
  if (!h.isUndefined(bearerHeader)) {
    req.token = bearerHeader.split(' ')[1]
    next()
  } else {
    res.sendStatus(403)
  }
}

const verifyToken = (req, res, next) => {
  // user.token != req.token ? res.sendStatus(403) : next()
  next()
}

const createToken = (length = 22) => {
  let token = new String()
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = length; i > 0; --i) token += chars[Math.floor(Math.random() * chars.length)];
  return token
}

router.put('/content', parseToken, verifyToken, (req, res) => {
  save(req.body)
  .then(() => {res.sendStatus(200)})
  .catch(() => {res.sendStatus(502)})
})

router.get('/content/:collection/:field', asyncHandler(
  async (req, res, next) => {
    const {collection, field} = req.params
    const data = await get(`${collection}${field ? '/' + field : ''}`)
    res.json(data)
  })
)

router.get('/content/:collection', asyncHandler(
  async (req, res, next) => {
    const {collection} = req.params
    const data = await get(collection)
    res.json(data)
  })
)

router.post('/login', (req, res) => {
  const [username, password] = Buffer.from(
    req.headers.authorization.split(' ')[1],
    'base64'
  )
  .toString('ascii')
  .split(':')
  
  if (username == user.username && password == user.password){
    user.token = createToken()
    res.json({token: user.token})
  } else {
    res.sendStatus(401)
  }
})

router.get('*', (req, res) => {
  res.sendFile(path.join(pagePath, 'index.html'))
})

module.exports = router