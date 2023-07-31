const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const scroll = document.querySelector(".scroll");

leftArrow.addEventListener("click", () => {
    scroll.scrollLeft -= scroll.offsetWidth;
});

rightArrow.addEventListener("click", () => {
   
    scroll.scrollLeft += scroll.offsetWidth;
    if(leftArrow.classList.contains != "leftArrow2"){
        leftArrow.classList.add("leftArrow2");
    }
});


