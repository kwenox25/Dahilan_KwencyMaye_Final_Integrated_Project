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

  function hover(img)
  {
   img.src = "images/orange-can-back.png";
  }