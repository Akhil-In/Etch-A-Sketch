let color = "";

let sketchContainer = document.querySelector(".sketch");
// -----------------------------------------------------------------------------------------------------

// ----------------------------Add Button for Generating Grids------------------------------------------------------------
let addButton = document.querySelector(".btn-grad");
addButton.addEventListener("click", function () {
  let num = window.prompt("Enter Grids:");
  if (num > 100) {
    alert("Enter below   100");
  }else if(num < 25){
    alert('Please Enter Greater than    25')
  }else {
    let sketchContainer = document.querySelector(".sketch");
    let bigContainer = document.querySelector(".right");
    sketchContainer.removeChild(bigContainer);
    grids(num);
  }

  // -----------------------------------Function for generating Grids ----------------------------------------
});

function grids(num) {
  let sketchContainer = document.querySelector(".sketch");
  let bigContainer = document.createElement("div");
  bigContainer.classList.add("right");
  for (let i = 0; i < num; i++) {
    let container = document.createElement("div");
    container.classList.add("grid-container");
    container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(${num}, 1fr)

    `;
    bigContainer.appendChild(container);

    for (let j = 0; j < num; j++) {
      let item = document.createElement("div");
      item.classList.add("item");
      container.appendChild(item);
    }
  }
  sketchContainer.appendChild(bigContainer);

  let items = document.querySelectorAll(".item");
  for (let k = 0; k < items.length; k++) {
    items[k].addEventListener("mouseover", function () {

      items[k].style.cssText = `
             background-color: ${color};
             `;
    });
  }
}

// -----------------------------------------
grids(54);
// -----------------------remove Grids -------------------------------------------------
let removeButton = document.querySelector(".remove");
removeButton.addEventListener("click", function () {

  let sketchContainer = document.querySelector(".sketch");
  let bigContainer = document.querySelector(".right");
  sketchContainer.removeChild(bigContainer);
  grids(54);
});


// -------------------------------Colour Input---------------------------------

const colorPicker = document.getElementById("colorPicker");
let currentColor = colorPicker.value;
colorPicker.addEventListener("change", function () {
  eraseButton.classList.remove("btn-active");
  pencilButton.classList.add("btn-active");
  let currentColor = this.value;
  color = currentColor;
  let items = document.querySelectorAll(".item");
  for (let l = 0; l < items.length; l++) {
    items[l].addEventListener("mouseover", function () {
      items[l].style.cssText = `
             background-color: ${currentColor};
             `;
    });
  }

});

// -----------------------------------------------------------------
// ----------------pencil Button ---------------------------------------------

let pencilButton = document.querySelector(".pencilBtn");
pencilButton.addEventListener('load', function(e){
  pencilButton.classList.add("btn-active");
})

pencilButton.addEventListener("click", function() {
  randomButton.classList.remove("btn-active")
  eraseButton.classList.remove("btn-active");
  pencilButton.classList.add("btn-active");

  let sketchPad = document.querySelector('.right');
  sketchPad.classList.add("pencil");
  color = currentColor;
  let items = document.querySelectorAll(".item");
  for (let l = 0; l < items.length; l++) {
    items[l].addEventListener("mouseover", function () {
      items[l].style.cssText = `
             background-color: ${color};
             cursor: url(images/pencil.cur), auto;
             `;
    });
  }

})


// ----------------------------Erase Button ------------------------------------------------------

let eraseButton = document.querySelector(".eraseBtn");
eraseButton.addEventListener("click", function() {

  pencilButton.classList.remove("btn-active");
  eraseButton.classList.toggle("btn-active");
  let sketchPad = document.querySelector('.right');
  sketchPad.classList.add("erase");

  let items = document.querySelectorAll(".item");
  for (let l = 0; l < items.length; l++) {
    items[l].addEventListener("mouseover", function () {
      items[l].style.cssText = `
             background-color: white;
             cursor: url(images/cursor.cur), auto;
             `;
    });
  }

})
// ------------------------------ Random Color Button ------------------------------------------------
let randomButton = document.querySelector(".randomBtn");
randomButton.addEventListener("click", function(){
  pencilButton.classList.remove("btn-active");
  randomButton.classList.add("btn-active");
  let items = document.querySelectorAll(".item");
  for (let m = 0; m < items.length; m++) {
    items[m].addEventListener("mouseover", function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
    color = randomColor;
      items[m].style.cssText = `
             background-color: #${color};
             cursor: url(images/pencil.cur), auto;
             `;
    });
  }

})
// --------------------------------------Grid Line Show Button -----------------------------------------
let gridButton = document.querySelector(".gridBtn");
gridButton.addEventListener('click', function() {
  gridButton.classList.toggle("btn-active");
  let items = document.querySelectorAll(".item");
  for (let m = 0; m < items.length; m++) {
    items[m].classList.toggle('item-grid');
  }

})
