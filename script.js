const  canvas = document.getElementById('canvas');
const supportError = "This browser does not support HTML5 Canvas elements";
// canvas.height = 500;
// canvas.width = 1000;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let ctx;
let number = 1;
let positionX =canvas.width/2;
let positionY = canvas.height/2;
let spacing = 10;
let steps = 1;
let turns = 0;
let turnCount = 0;
let radius = 2;
let maxNum = (canvas.width > canvas.height) ? ( canvas.width / spacing ) ** 2 :  ( canvas.height / spacing ) ** 2;

const supports =  (canvas.getContext) ? setupCanvas() : console.error(supportError);

function setupCanvas(){
    ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ctx.font = '30px Arial';
    // ctx.textAlign = 'center';
    startSpiral();
}

function startSpiral(){
    for( number; number <= maxNum ; number++){
        //ctx.fillText(number, positionX, positionY);
        ctx.beginPath();
        ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
        (isPrime(number)) ?  ctx.fillStyle = '#c4c4c4':  ctx.fillStyle = '#383838';
        ctx.fill();
        switch (turns % 4){
            case 0:
                positionX += spacing; //Right
                break;
            case 1:
                positionY -= spacing; //Up
                break;
            case 2:
                positionX -= spacing; //Left
                break;
            case 3:
                positionY += spacing; //Down
                break;
            default:
                break;
        }
        if( number % steps == 0){
            turns++;
            turnCount++;
            (turnCount % 2 == 0) ? steps++ : steps;
        }
        
        

    }
}

function isPrime(num){
    if(num === 1) return false;
    for(i = 2; i <= (num / 2 ); i++){
        if( num %  i === 0){
            return false
        }
    }
    return true;
}

// window.onresize = () => {
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     positionY = canvas.height/2;
//     positionX = canvas.width/2;
//     number = 1;
//     spacing = 10;
//     steps = 1;
//     turns = 0;
//     turnCount = 0;
//     radius = 2;
//     maxNum = (canvas.height * canvas.width) / spacing;
//     setupCanvas();
// }