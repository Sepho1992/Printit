
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]
let carousselImg= document.querySelector(".banner-img");
let tagLine= document.querySelector("#banner p"); 
let index= 0;

let dots= document.querySelector(".dots");
for (let i=0;i<slides.length;i++) {

	dots.innerHTML += '<span class="dot"></span>';
}

let bullets= document.querySelectorAll(".dot");
bullets[0].classList.add("dot_selected");

function removeSelected(){
	for(let i=0;i<bullets.length;i++){
		bullets[i].classList.remove("dot_selected");
	}
}

function showPreviousImage(){
    index= index-1;
	if (index<0) index=slides.length-1;
	
    carousselImg.src= "./assets/images/slideshow/" + slides[index].image;
	tagLine.innerHTML =slides[index].tagLine;
	removeSelected();
	bullets[index].classList.add("dot_selected");
}

function showNextImage(){
    index =  (index + 1) % slides.length
    carousselImg.src= "./assets/images/slideshow/" + slides[index].image;
	tagLine.innerHTML =slides[index].tagLine;
	removeSelected();
    bullets[index].classList.add("dot_selected");

}

const arrowleft= document.querySelector(".arrow_left")
const arrowright= document.querySelector(".arrow_right")


arrowleft.addEventListener("click",showPreviousImage);
arrowright.addEventListener("click",showNextImage);


