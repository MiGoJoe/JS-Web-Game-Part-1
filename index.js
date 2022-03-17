/*let greenCharacter = document.createElement("img");
greenCharacter.src = "assets/green-character.gif";
greenCharacter.style.position = "fixed";
greenCharacter.style.left = "100px";
greenCharacter.style.bottom = "100px";
document.body.append(greenCharacter);

Created game image generator "newImage" using the
the above code as a guide. I at first tried to just pass it 
a string that changed the object name along with an address teh coordinates, but that didn't work
plus I REMEMBERED THAT I CAN REUSE AN OBJECT EASILY!!
*/

function newImage(imgAddress, leftPosition, bottomPosition) {
  let gameImg = document.createElement("img");
  gameImg.src = imgAddress;
  gameImg.style.position = "fixed";
  gameImg.style.left = leftPosition + "px";
  gameImg.style.bottom = bottomPosition + "px";
  document.body.append(gameImg);
  
  return gameImg;
}

/*Create player item image oject then remove it  using doubleclick */
function newItem(imgAddress, leftPosition, bottomPosition) {
    let gameItem = newImage(imgAddress, leftPosition, bottomPosition);

    gameItem.addEventListener("dblclick", () => {
      gameItem.remove();
    });
}


/* Call newImage with parameters for each game image */
newImage("assets/green-character.gif", 100, 100);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);


/* Call newItem with parameters for each character item */
newItem('assets/sword.png', 500, 405);
newItem('assets/sheild.png', 165, 185);
newItem('assets/staff.png', 600, 100);
