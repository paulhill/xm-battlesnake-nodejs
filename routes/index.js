var express = require('express')
var router  = express.Router()
var game_id;

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

  try {

    console.log('body', req.body)

    game_id = req.game_id;

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
  } catch (e) {
    console.error(e);
  }
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move

  var body = req.body;
  console.log('body', body);

  try {
    var height = body.height
    var width = body.width
    var food = body.food
    var snakes = body.snakes
    var dead_snake = body.dead_snake
    var you = body.you

    // methods
    var snake = getMySnake(snakes, you)
    var points = findSafeAdjacentMoves(snake, snakes, dead_snake, height, width)
    // var move = findClosestToFood(points, food)
    // Response data
    var data = {
      taunt: 'Outta my way, cucumbers!', // optional, but encouraged!
      move: 'down'
    }
  }
  catch (e) {
    console.error(e);
  }
})

function getMySnake(snakes, you) {
    return snakes.find(function(snake) {
        if (snake.id == you) {
            return true;
        }
        return false;
    });

}

//
function findSafeAdjacentMoves(snake, snakes, dead_snake, height, width) {
  var head = snake.coords[0]
  // up, down, left, right
  var options = [ [head[0], head[1]-1], [head[0], head[1]+1], [head[0]-1, head[1]], [head[0]+1, head[1]] ]
  // iterate through if it's safe
  var inbounds = options.filter(function(point) {
    return point[0] >= 0 && point[0] <= width && point[1] >= 0 && point[1] <= height
  })
  return inbounds
}

// health
router.get('/health', function (req, res) {
  return res.send("OK");
})

module.exports = router
