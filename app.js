'use strict'

let tileContainer = document.querySelector(".tiles");
let colors = ["brown", "red", "crimson", "orange", "violet", "gold", "greenyellow", "teal",];
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
    element,addEventListener("click", () => {
        if (awaitingEndOfMove){
            return;
         }

         element.style.backgroundColor = color;

         if(!activeTile) {
            activeTile = element;

            return;
        }
        let colorToMatch = activeTile.getAttribute("data-color");

        if (colorToMatch === color){
            awaitingEndOfMove= false;
            activeTile = null;
            revealCount += 2;

            if (revealCount === tileContainer) {
                alert("You Win!")

                return;

            }
        }


        awaitingEndOfMove = true;

        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile= null;



        }, 1000);

    });
    
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

