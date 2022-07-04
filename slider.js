const slideContainer = document.querySelector(".slideContainer");
const slideContainerImage = document.querySelectorAll(" .slideContainer img");

const prevbtn = document.querySelector("#left");
const nextbtn = document.querySelector("#right");
const lenght = slideContainer.clientWidth;
let  i = 0;

nextbtn.addEventListener("click", slideForward);
prevbtn.addEventListener("click", slideBackward);

function slideForward() {
    slideContainerImage[i].classList.remove('active');
	if(slideContainerImage[i].nextElementSibling){
		slideContainerImage[i].nextElementSibling.classList.add("active");
		i++;
	}
	else {
		i = 0;
		slideContainerImage[i].classList.add("active");
	}
	
}


function slideBackward() {
   slideContainerImage [i].classList.remove('active');
	if(slideContainerImage[i].previousElementSibling){
		slideContainerImage[i].previousElementSibling.classList.add("active");
		i--;
	}
	else {
		i = slideContainerImage.length-1;
		slideContainerImage[i].classList.add("active");
	}
}

let interval = null;

document.getElementById("startAuto").addEventListener("click", ()=>{
	interval = setInterval(slideForward, 3000);
});

document.getElementById("stopAuto").addEventListener("click", ()=>{
	clearInterval(interval);
});
