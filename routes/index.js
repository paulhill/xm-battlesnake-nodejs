var express = require('express')
var router  = express.Router()
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  // Response data
  var data = {
    color: "#DFFF00",
    name: "ContraSnake",
    head_url: "http://www.placecage.com/c/200/200", // optional, but encouraged!
    taunt: "Let's do thisss thang!", // optional, but encouraged!
  }

  return res.json(data)
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move
  var height = req.body.height
  var width = req.body.width
  var food = req.body.food
  var snakes = req.body.snakes
  var dead_snake = req.body.dead_snake
  var you = req.body.you
  console.log(req.body)
  console.log('you=' + you)
  console.log('height=' + height)
  console.log('width=' + width)
  // Response data
  var data = {
    move: 'down', // one of: ['up','down','left','right']
    taunt: 'Outta my way, loser!', // optional, but encouraged!
  }

  return res.json(data)
})

module.exports = router
