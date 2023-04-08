(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/
function nutritionalFacts() {
	var x = document.getElementById("nutritionalFacts");
	x.style.display = (x.style.display === "none") ? "block" : "none";
  }

function drinkDaily() {
	var x = document.getElementById("drinkDaily");
	x.style.display = (x.style.display === "none") ? "block" : "none";
  }

  function quatroStandard() {
	var x = document.getElementById("quatroStandard");
	x.style.display = (x.style.display === "none") ? "block" : "none";
  }


let fruits = document.querySelectorAll('.items img');

  function changeBGImage() {
    let originalSrc = this.getAttribute('src');
    this.src = originalSrc.replace('.png', '-back.png');
    console.log('hovering', this);
  }

  function resetBGImage() {
    let originalSrc = this.getAttribute('src');
    this.src = originalSrc.replace('-back.png', '.png');
    console.log('mouseout', this);
  }

  fruits.forEach(fruit => {
    fruit.addEventListener("mouseover", changeBGImage);
    fruit.addEventListener("mouseout", resetBGImage);
  });

  let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

function validateRange(minPrice, maxPrice) {
  if (minPrice > maxPrice) {

    // Swap to Values
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;
}

const inputElements = document.querySelectorAll("input");

inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    validateRange(minPrice, maxPrice);
  });
});

validateRange(inputElements[0].value, inputElements[1].value);