const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 800;
const ctx = canvas.getContext("2d");
const COLS = 20;
const ROWS = 40;

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

const randomLetters = "abcdefghijklmnopqrstuvwxyz".split("");
function getRandomLetter() {
  const rand = getRandom(randomLetters.length);
  return randomLetters[rand];
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const columns = [];

setInterval(function() {
  fillColumnsWithLetters();
  draw();
}, 100)

class Column {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.v = +(Math.random() * 20).toFixed(2);
    this.letters = [];
  }
}

class Letter {
  constructor(char) {
    this.char = char;
  }
}


for (let i = 0; i < COLS; i++) {
  columns.push(new Column(i * 20, 0))
}

function fillColumnsWithLetters() {
  columns.forEach(column => {
    setTimeout(function() {
      if (column.letters.length < ROWS) {
        column.letters.push(
          new Letter( getRandomLetter() )
        );
      }
    }, column.v * 1000)
  })
}

function draw() {
  columns.forEach((col, i) => {
    col.letters.forEach((letter, j) => {
      ctx.font = "20px Arial";
      ctx.fillStyle = "lime";
      ctx.fillText(letter.char, i * 20, j * 20);
    })
  })
}