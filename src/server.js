const express = require('express')
const server = express()
const VoteCounter = require("../src/voteCounter.js")

voteCounter = new VoteCounter(0)

server.get('/vote_up', function (req, res, next) {
  voteCounter.voteHot()
  next()
}, function (req, res) {
  res.send(`${voteCounter.votes}`)
})

server.listen(3000, ()=> console.log('Example app listening on port 3000!'))


module.exports = server