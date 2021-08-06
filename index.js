let container = document.getElementById('container')

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
        for( j = 0 ; j < line.length; j++) {
            let cell = document.createElement('div');
            cell.setAttribute('id', `cell${i} ${j}`)
        }       
    }
}

mazeGenerator()