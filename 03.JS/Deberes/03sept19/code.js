let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let heigth = canvas.height = window.innerHeight;

function random (min, max){
    let num = Math.floor(math.random()* (max - min + 1)) + min;
    return num;
}

function Ball (x, y, velX, velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size; 
}

Ball.prototype.draw = function (){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 *Math.PI)
    ctx.fill();
}

Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.VelX);
    }

    if ((this.x - this.size) <= 0){
        this.velX = (this.velX);
    }

    if ((this.y + this.size) >= height){
        this.velY = (this.velY);
    }

    if((this.y - this.size) <= 0){
        this.velY = - (this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
}

const balls = [];

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    while (balls.length < 25) {
      var size = random(10,20);
      var ball = new Ball(
        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size
      );
      balls.push(ball);
    }
  
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
    }
  
    requestAnimationFrame(loop);
  }

  loop();

  require('./veggie.js')
// Beginning with this array, print a pyramid of asterisks like so
//               **
//              ****
//             ******
//            ********
//           **********
//          ************
//         **************
//        ****************
//       ******************
//      ********************
//     **********************
//    ************************
//   **************************
//  ****************************
// ******************************
const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

// Insert an emoji of your choice between each one of the words of this sentence, generating a new String with it.
const sentence = 'I am MFR and I love to code at MFR'

// Using padEnd, transform all these verbs to its infinitive form
const verbs = ['play', 'stream', 'read', 'learn', 'watch']
const continuousVerbs = verbs.map(verb => verb.padEnd(verb.length + 3, 'ing'))

console.log(continuousVerbs)


// Count the words of this tongue twister
const tongueTwister = '¿Por qué a la cama se le llama cama y a la cómoda cómoda, siendo la cómoda menos cómoda que la cama y la cama más cómoda que la cómoda?'

// Trim this sentence so the resulting string is 'I want to be alone'
const untrimmedWord = '1             I want to be alone         1'
//untrimmedWord.replace(patron, nuevoValor).trim()
untrimmedWord.split('1')[1].trim()
console.log(untrimmedWord.split('1'))
//console.log(untrimmedWord.split('1')[0].trim())

// BONUS: hide the sensitive part of your email with asterisks, leaving the domain part visible
// Example: my-personal-email@gmail.com --> *****************@gmail.com
const email = 'my-personal-email@gmail.com'

const division = email.split('@')
const hiddenWord = division[0].replace(/./g, '*')
const hiddenEmail = hiddenWord + '@' + division[1]
console.log(hiddenEmail)