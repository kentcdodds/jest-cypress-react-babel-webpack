const express = require('express')
const bodyParser = require('body-parser')
const detectPort = require('detect-port')
const getDebugger = require('debug')

const debug = getDebugger('app')
const users = {}

async function start({port}) {
  port = port || process.env.PORT || (await detectPort(3000))

  const app = express()
  app.use(bodyParser.json())

  function authenticate(req, res, next) {
    const token =
      req.headers.authorization &&
      req.headers.authorization.slice('Bearer '.length)
    if (!token) {
      return res.sendStatus(400)
    }
    const user = users[token]
    if (!user) {
      return res.sendStatus(401)
    }
    req.user = user
    req.token = token
    return next()
  }

  app.get('/me', authenticate, (req, res) => {
    return res.json(req.user)
  })

  app.get('/logout', authenticate, (req, res) => {
    delete users[req.token]
    res.sendStatus(200)
  })

  app.post('/login', (req, res) => {
    const token = Math.random().toString()
    const user = req.body
    users[token] = user
    return res.json({user: {token, ...user}})
  })

  return new Promise(resolve => {
    const server = app.listen(port, () => {
      debug(`Listening on port ${server.address().port}`)
      const originalClose = server.close.bind(server)
      server.close = () => {
        return new Promise(resolveClose => {
          originalClose(resolveClose)
        })
      }
      resolve(server)
    })
  })
}

module.exports = {start}
