let x = innerWidth / 2
let y = innerHeight / 2
let dy = 2
let dx = 2

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(255, 0, 0, 100)
}

function draw () {
  background(255, 0, 100, 10)
  let d = width /8
  let r = d/2
  x += dx
  y += dy

if (y > height-r || y<r) dy = -dy
if (x > width - r || x< r) dx = -dx

  ellipse (x, y, d)
}
