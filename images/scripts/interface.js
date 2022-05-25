
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    let btns = document.querySelectorAll(".btn");
    btns.forEach((btn) => {
        btn.addEventListener('click', resetGame);
    })


})

function handleClick(event){

    let square = event.target;

    let position = square.id;

    if(handleMove(position)){
        
        setTimeout( () => {
            // alert("O Jogo Acabou - O Vencedor foi o Jogador " + Number(playerTime + 1))
            if(draw == true){
                document.getElementsByClassName("draw")[0].style.display = "flex";
            } else if(playerTime == 0){
                document.getElementsByClassName("xwin")[0].style.display = "flex";
            } else if(playerTime == 1){
                document.getElementsByClassName("owin")[0].style.display = "flex";
            }
        }, 10) 
    };
    updateSquare(position);

}

function updateSquare (position) {
    let square = document.getElementById(position.toString());
    let symbol = bord[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}


function resetGame () {
    bord = ['','','','','','','','',''];

    playerTime = 0;

    gameOver = false;

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        square.innerHTML = `<div class=''></div>`;
    })

    document.getElementsByClassName("xwin")[0].style.display = "none"
    document.getElementsByClassName("owin")[0].style.display = "none"
    document.getElementsByClassName("draw")[0].style.display = "none"
}


