//--------------------------------------
// CHANGE H1 STYLE - color

const pokemonName = document.querySelector("h1");

pokemonName.addEventListener("click", function () {

  console.log("Changed Pokemon name color!");
  pokemonName.style.color = "red"
  
});

//--------------------------------------
// CHANGE Snivy img

const image = document.querySelector("img");

// Snivy Album Source (https://imgur.com/a/bBQIR5S)

snivyAlbumLinks = [
  "https://i.imgur.com/ap6aewp.png", 
  "https://i.imgur.com/9wct4LT.png", 
  "https://i.imgur.com/FjZzeHd.png", 
  "https://i.imgur.com/0QNqgOj.png", 
  "https://i.imgur.com/rxjPKhl.png",
  "https://i.imgur.com/O11SnUE.png", 
  "https://i.imgur.com/8BLV2ov.png", 
  "https://i.imgur.com/Cr01Ku4.png"]

image.addEventListener("click", function () {

  randomImg = Math.floor(Math.random() * snivyAlbumLinks.length);
  image.src = snivyAlbumLinks[randomImg]
  console.log("Switched image!");


});

//-----------------------------------------
// CLICK BUTTON TO CHNANGE CONTAINER STYLE

const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", function () {

  console.log("Toggled light/dark mode!");
  container.classList.toggle("lightMode")

});