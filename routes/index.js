var express = require('express')
var router  = express.Router()
var game_id;
var height;
var width;

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
  }

  return res.json(data)
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move

  // Response data
  var data = {
    move: 'down', // one of: ['up','down','left','right']
    taunt: 'Outta my way, cucumbers!', // optional, but encouraged!
  }

  return res.json(data)
})

// health
router.get('/health', function (req, res) {
  return res.send("OK");
})

module.exports = router
