'use strict'

let tileContainer = document.querySelector(".tiles");
let colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal",];
let colorsPicklist = [...colors, ...colors];
let tileTotal = colorsPicklist.length;

// Game State

let revealCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
    let element = document.createElement('div')

    element.classList.add("tile");
    element.setAttribute("data-color", color)
    element,addEventListener(click, () => {

    })
    
    return element;
}


// Build of tiles with random index
for(let i = 0; i < tileTotal; i++) {
let randomIndex = Math.floor(Math.random() * colorsPicklist.length);
let color = colorsPicklist[randomIndex];
let tile = buildTile(color);

colorsPicklist.splice(randomIndex, 1);
tileContainer.appendChild(tile);
}

