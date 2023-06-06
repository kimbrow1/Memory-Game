'use strict'

const tileContainer = document.querySelector(".tiles");
const colors = ["brown", "red", "crimson", "orange", "violet", "gold", "greenyellow", "teal",];
const colorsPicklist = [...colors, ...colors];
const tileTotal = colorsPicklist.length;

// Game State

let revealCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
    const element = document.createElement("div")

    element.classList.add("tile");
    element.setAttribute("data-color", color)
    element.setAttribute("data-revealed", "false")


    element.addEventListener("click", () => {

        const revealed = element.getAttribute("data-revealed");

        if (awaitingEndOfMove  || revealed === "true" || element === activeTile){
            return;
         }

         element.style.backgroundColor = color;

         if(!activeTile) {
            activeTile = element;

            return;
        }

        constß colorToMatch = activeTile.getAttribute("data-color");

        if (colorToMatch === color){
            activeTile.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");
            
            activeTile = null;
            awaitingEndOfMove= false;
            revealCount += 2;

            if (revealCount === tileTotal) {
                alert("You Win Refresh To Play Again!");

            }  

             return;
             
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
const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
const color = colorsPicklist[randomIndex];
const tile = buildTile(color);

colorsPicklist.splice(randomIndex, 1);
tileContainer.appendChild(tile);
}

