let container = document.getElementById('container');

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

function mazeGenerator() {
    for ( let i = 10 ; i < (map.length +10)  ; i++) {
        let line = map[ i -10 ].split('')
        let lineCont = document.createElement('div')
        lineCont.setAttribute('id', `line${i}`);
        lineCont.setAttribute('class' , 'lines');
        container.appendChild(lineCont)
        for( j = 10 ; j < line.length + 10; j++) {
            let cell = line[ j - 10]
            let cellCont = document.createElement('div');
            cellCont.setAttribute('id', `L${i}${j}`);
            cellCont.setAttribute('class', 'cells');
            if (cell === "W") {
                cellCont.classList.add("wall")
            }
            if (cell === " ") {
                cellCont.classList.add('path')
            }
            if (cell === "S") {
                cellCont.classList.add('path')
                cellCont.classList.add('duck')
                cellCont.classList.add('down')
            }
            if (cell === "F") {
                cellCont.classList.add('path')
                cellCont.classList.add('exit')
            }
            lineCont.appendChild(cellCont)
        }       
    }
}
mazeGenerator();

const starterCell = document.getElementsByClassName("duck")[0]
let currentCellId = starterCell.id;
let currentCell = starterCell
let moveIndex = Number(currentCellId.replace(/L/g, ''))
let nextCell = document.getElementById(`L${moveIndex}`)
let move 
//funcao de validacao 

function validMove () {
    let valid = nextCell.classList.contains("path")
    if ( valid === true) { 
        currentCell.classList.remove("duck", "right" , "left", "up", "down")
        nextCell.classList.add("duck" , `${move}`)
        currentCell = nextCell
    }else {
        moveIndex = Number(currentCellId.replace(/L/g, ''))
        alert("QUACK!")
        
    }
}
// function victory

function victory () {
    let exitCell = document.getElementsByClassName("exit")[0]
    if (exitCell.classList.contains("duck") === true ) {
        return alert('victory!')
    }
}

//funcao de movimento
function movement(){
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === "ArrowDown") {
            move = "down"
            moveIndex += 100
            nextCell = document.getElementById(`L${moveIndex}`)
            validMove()
            victory()
        }
        if (keyName === 'ArrowUp') {
            move = "up"
            moveIndex -= 100
            nextCell = document.getElementById(`L${moveIndex}`)
            validMove()
            victory()

        }
        if (keyName === "ArrowLeft") {
            move = "left"
            moveIndex -= 1
            nextCell = document.getElementById(`L${moveIndex}`)
            validMove()
            victory()
        }
        if (keyName === "ArrowRight") {
            move = "right"
            moveIndex += 1
            nextCell = document.getElementById(`L${moveIndex}`)
            validMove()
            victory()
        }
  })
};

movement()

// music

let audio = document.getElementById('audio')
let playPauseBTN = document.getElementById('playPauseBTN')
let status = true;

function lowerVolume () {
    audio.setVolume = 0.3 ;
}

function setVolume(number) {
    audio.volume = (number/10)
}

function playPause(){
    if(status === false) {
        status = true;
        audio.play();
        playPauseBTN.innerHtml = '<i class="fas fa-pause"></i>';
    }else {
        status = false;
        audio.pause()
        playPauseBTN.innerHTML = '<i class="fas fa-play"></i>';
    }
}
