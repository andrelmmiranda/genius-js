let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - verde
1 - vermelho
2 - amarelo
3 - azul
*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

const shuffleOrder = ()=>{
    const colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    
    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

const lightColor = (element, number)=>{
    const time = number * 500;

    setTimeout(()=>{
        element.classList.add('selected');
    }, time - 250);

    setTimeout(()=>{
        element.classList.remove('selected');
    }, time);
}

const checkOrder = ()=>{

    for(let i in clickedOrder){
        if(clickedOrder[i] !== order[i]){
            gameOver();
            return; 
        }
    }
    
    if(clickedOrder.length === order.length){
        alert(`
            Potuação: ${score}
            Você acertou! Iniciando próximo nível...
        `);

        setTimeout(()=>{
            nextLevel();
        }, 1000);
    }
}

const click = (color)=>{
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(()=>{
        createColorElement(color).classList.remove('selected');
    }, 250);

    checkOrder();
}

const createColorElement = (color)=>{
    switch(color){
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
        default:
            console.log("Algo de errado aconteceu.")
    }
}

const nextLevel = ()=>{
    score++;
    shuffleOrder();
}

const gameOver = ()=>{
    alert(`
        Potuação: ${score}
        Você perdeu! Clique me Ok para reiniciar o jogo.
    `);

    order = [];
    clickedOrder = [];

    playGame();
}

const playGame = ()=>{
    alert(`Bem vindo ao genius!`);

    score = 0;

    nextLevel();
}

green.addEventListener('click', ()=> click(0));
red.addEventListener('click', ()=> click(1));
yellow.addEventListener('click', ()=> click(2));
blue.addEventListener('click', ()=> click(3));


// green.onclick = ()=> click(0);
// red.onclick = ()=> click(1);
// yellow.onclick = ()=> click(2);
// blue.onclick = ()=> click(3);

playGame();