console.log('Hello')

const board = [];

function play(clickedId){
    const clicked = document.getElementById(clickedId);
    const playerType = document.getElementById('player');
    
    if(playerType.innerText === 'X'){
        playerType.innerText = 'O';
        clicked.innerText = 'X';
        board[clickedId] = 'X';
    } else {
        playerType.innerText = 'X';
        clicked.innerText = 'O';
        board[clickedId] = 'O';
    }
    console.log(board);

    const topLeft = board[0];
    const topCenter = board[1];
    const topRight = board[2];
    const middleLeft = board[3];
    const middleCenter = board[4];
    const middleRight = board[5];
    const bottomLeft = board[6];
    const bottomCenter = board[7];
    const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`${topLeft} is the winner`);
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleCenter === middleRight){
        alert(`${middleLeft} is the winner`);
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomCenter === bottomRight){
        alert(`${bottomLeft} is the winner`)
    }
    if (topLeft !== undefined && topLeft === middleLeft && middleLeft === bottomLeft){
        alert(`${topLeft} is the winner`)
    }
    if (topCenter !== undefined && topCenter === middleCenter && middleCenter === bottomCenter){
        alert(`${topCenter} is the winner`)
    }
    if (topRight !== undefined && topRight === middleRight && middleRight === bottomRight){
        alert(`${topRight} is the winner`)
    }
    if (topLeft !== undefined && topLeft === middleCenter && middleCenter === bottomRight){
        alert(`${topLeft} is the winner`)
    }
    if (topRight !== undefined && topRight === middleCenter && middleCenter === bottomLeft){
        alert(`${topRight} is the winner`)
    }
    
    let fullBoard = true;
    for(let i = 0; i <= 8; i++){
        if(board[i] === undefined){
            fullBoard = false
        }
    }
    if(fullBoard === true){
       alert(`Cat's game, there is no winner`);
    }
}
