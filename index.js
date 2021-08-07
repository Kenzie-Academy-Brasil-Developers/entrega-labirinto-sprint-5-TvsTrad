let container = document.getElementById('container');
//

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
let nextCell = document.getElementById(moveIndex)
// usar o ID da currentCellId para definir o ID da nextCell .



function movement(){
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === "ArrowDown") {
            moveIndex += 100
            moveIndex = `L${moveIndex}`
            nextCell = document.getElementById(moveIndex)
            currentCell.classList.remove("duck")
            nextCell.classList.add("duck")
            currentCell = nextCell
            return currentCell            
        }
        if (keyName === 'ArrowUp') {
            moveIndex -= 100
            moveIndex = `L${moveIndex}`
            nextCell = document.getElementById(moveIndex)
            currentCell.classList.remove("duck")
            nextCell.classList.add("duck")
            currentCell = nextCell.id
            
        }
        if (keyName === "ArrowLeft") {
            moveIndex -= 1
            moveIndex = `L${moveIndex}`
            nextCell = document.getElementById(moveIndex)
            currentCell.classList.remove("duck")
            nextCell.classList.add("duck")
            currentCell = nextCell.id
        }
        if (keyName === "ArrowRight") {
            moveIndex += 1
            moveIndex = `L${moveIndex}`
            nextCell = document.getElementById(moveIndex)
            currentCell.classList.remove("duck")
            nextCell.classList.add("duck")
            currentCell = nextCell.id
        }
  })
};

movement()

function validate() {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        if (keyName === "ArrowDown") {
        
        }
        if (keyName === 'ArrowUp') {
        
        }
        if (keyName === "ArrowLeft") {
        
        }
        if (keyName === "ArrowRight") {
        
        }
    })
}