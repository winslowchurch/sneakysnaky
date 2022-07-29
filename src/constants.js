const DIRECTIONS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  right: { x: 1, y: 0 },
  left: { x: -1, y: 0 },
}

const DIRECTION_UP = 'up';
const DIRECTION_DOWN = 'down';
const DIRECTION_RIGHT = 'right';
const DIRECTION_LEFT = 'left';

const GAME_SPEED = 25
const INITIAL_SNAKE_SIZE = 8
const SNAKE_COLOR = 'blue'
const DOT_COLOR = 'red'

module.exports = {
  GAME_SPEED,
  DIRECTIONS,
  INITIAL_SNAKE_SIZE,
  SNAKE_COLOR,
  DOT_COLOR,
  DIRECTION_UP,
  DIRECTION_RIGHT,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
}
