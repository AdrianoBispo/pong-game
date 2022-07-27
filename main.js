// Posição da Bolinha (x,y)
let ball_X = 300;
let ball_Y = 200;

// Tamanho da Bolinha
let diametro = 20;
let raio = diametro / 2;

// Velocidade da Bolinha
let velocity_X = 3; 
let velocity_Y = 3;

// variavél da colisão
let hit = false;

// Posição da Raquete (x,y)
let racket_X = 8
let racket_Y = 170

// Posição da Raquete do Oponente (x,y)
let racketOpponent_X = 590
let racketOpponent_Y = 170
let velocityOpponent_Y;

// Tamanho da Raquete (Width x Height)
let racket_Width = 10
let racket_Height = 85
  
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Ball();
  movimentBall();
  collisionBall();
  Racket(racket_X, racket_Y);
  Racket(racketOpponent_X, racketOpponent_Y);
  movimentRacket();
  movimentRacketOpponent();
  collisionRacket(racket_X, racket_Y);
  collisionRacket(racketOpponent_X, racketOpponent_Y);
}

function Ball() {
  circle(ball_X, ball_Y, diametro);
}

function movimentBall() {
  ball_X += velocity_X;
  ball_Y += velocity_Y;
}

function collisionBall() {
  if (ball_X + raio> width || ball_X - raio < 0)
    velocity_X *= -1
  
  if (ball_Y + raio > height || ball_Y - raio < 0)
    velocity_Y *= -1
}

function Racket(x, y) {
  rect(x, y, racket_Width, racket_Height)
}

function movimentRacket() {
  if(keyIsDown(UP_ARROW)){
    racket_Y -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    racket_Y += 10;
  }
}
function movimentRacketOpponent() {
  velocityOpponent_Y = ball_Y - racketOpponent_Y - racket_Width / 2 - 30;
  racketOpponent_Y += velocityOpponent_Y;
}
function collisionRacket(x, y) {
  hit = collideRectCircle(x, y, racket_Width, racket_Height, ball_X, ball_Y, raio);
  if (hit) {
    velocity_X *= -1;
  }
}

