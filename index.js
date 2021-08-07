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
    for ( let i = 0 ; i < map.length ; i++) {
        let line = map[i].split('')
        let lineCont = document.createElement('div')
        lineCont.setAttribute('id', `line${i}`);
        lineCont.setAttribute('class' , 'lines');
        container.appendChild(lineCont)
        for( j = 0 ; j < line.length; j++) {
            let cell = line[j]
            let cellCont = document.createElement('div');
            cellCont.setAttribute('id', `${i} ${j}`);
            cellCont.setAttribute('class', 'cells');
            if (cell === "W") {
                cellCont.classList.add("wall")
            }
            if (cell === " ") {
                cellCont.classList.add('path')
            }
            if (cell === "S") {
                cellCont.classList.add('duck')
            }
            if (cell === "F") {
                cellCont.classList.add('exit')
            }
            lineCont.appendChild(cellCont)
        }       
    }
}
mazeGenerator();

function movement(){
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        console.log(keyName)
        if (keyName === "ArrowDown") {
        
        }
        if (keyName === 'ArrowUp') {
        
        }
        if (keyName === "ArrowLeft") {
        
        }
        if (keyName === "ArrowRight") {
        
        }
        
  })
};

let starterCell = document.getElementsByClassName("duck")[0]
let currentCell = starterCell.id;
console.log(currentCell)
function validate() {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        console.log(keyName)
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