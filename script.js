const  canvas = document.getElementById('canvas');
const supportError = "This browser does not support HTML5 Canvas elements";
canvas.height = 500;
canvas.width = 1000;
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

let ctx;
let number = 1;
let positionX =canvas.width/2;
let positionY = canvas.height/2;
let spacing = 50;
let steps = 1;
let turns = 0;
let turnCount = 0;

const supports =  (canvas.getContext) ? setupCanvas() : console.error(supportError);

function setupCanvas(){
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#FFF';
    ctx.textAlign = 'center';
    startSpiral();
}

function startSpiral(){
    for( number; number <= 90 ; number++){
        if (turns > 0){
            switch (turns % 4){
                case 0:
                    positionY += spacing; //Down
                    break;
                case 1:
                    positionX += spacing; //Right
                    break;
                case 2:
                    positionY -= spacing; //Up
                    break;
                case 3:
                    positionX -= spacing; //Left
                    break;
                default:
                    break;
            }
        }
        ctx.fillText(number, positionX, positionY);
        if( number % steps == 0){
            turns++;
            turnCount++;
            (turnCount % 2 == 0) ? steps++ : steps;
        }
        
        

    }
}

// window.onresize = () => {
//     canvas.height = 500;
//     canvas.width = 500;
//     // canvas.height = window.innerHeight;
//     // canvas.width = window.innerWidth;
//     positionY = canvas.height/2;
//     positionX = canvas.width/2;
//     setupCanvas();
// }