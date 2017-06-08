var express = require('express')
var router  = express.Router()
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
var game_id;
var height;
var width;
var headTypes = [
  "bendr",
  "dead",
  "fang",
  "pixel",
  "regular",
  "safe",
  "sand-worm",
  "shades",
  "smile",
  "tongue"
];

var tailTypes = [
  "small-rattle",
  "skinny-tail",
  "round-bum",
  "regular",
  "pixel",
  "freckled",
  "fat-rattle",
  "curled",
  "block-bum"
];


// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // start the game

  game_id = req.game_id;
  height = req.height;
  width = req.width;

  console.log('game_id', game_id);
  console.log('height', height);
  console.log('width', width);

  // Response data
  var data = {
    color: "#DFFF00",
    name: "teamradiohead",
    //head_url: "http://www.placecage.com/c/200/200", // optional, but encouraged!
    taunt: "Cucumbers!", // optional, but encouraged!
    head_type: headTypes[Math.floor(Math.random()*headTypes.length)],
    tail_type: tailTypes[Math.floor(Math.random()*tailTypes.length)]
    //secondary_color: ""
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
  // methods
  var snake = getMySnake(snakes, you)
  var points = findSafeAdjacentMoves(snake, snakes, dead_snake, height, width)
  var move = findClosestToFood(points, food)
  // Response data
  var data = {
    taunt: 'Outta my way, cucumbers!', // optional, but encouraged!
  }

  return res.json(data)
})

// health
router.get('/health', function (req, res) {
  return res.send("OK");
})

module.exports = router
