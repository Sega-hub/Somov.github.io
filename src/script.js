console.log("Hello World");

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel__item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showItem(newIndex) {
        if (newIndex < 0) {
            index = items.length - 1;
        } else if (newIndex >= items.length) {
            index = 0;
        } else {
            index = newIndex;
        }
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => showItem(index - 1));
    nextButton.addEventListener('click', () => showItem(index + 1));

});

function outputUpdate(vol) {
    const output = document.querySelector('#volume');
    output.value = `${vol}%`;
    output.style.left = vol - 20 + 'px';
    if(output.value > 9) {
        output.style.left = vol - 30 + 'px';
    }
    if(output.value > 99) {
        output.style.left = vol - 40 + 'px';
    }
    if(output.value > 240) {
        output.style.left = vol - 45 + 'px';
    }
    if(output.value > 430) {
        output.style.left = vol - 50 + 'px';
    }
    if(output.value > 470) {
        output.style.left = vol - 55 + 'px';
    }
}

let isActive = false;
const btn = document.querySelector(".mob");
const upPl = document.querySelector(".mob__upi");
const dwPl = document.querySelector(".mob__dpi");
const menu = document.querySelector(".mob__list");

function menuActivate(){
    if (isActive){
        upPl.style.transform = "rotate(0deg)";
        dwPl.style.transform = "rotate(0deg)";
        dwPl.style.margin = "2px 0px 0px 0px";
        menu.style.display = "none";
        isActive = false;
    } else {        
        upPl.style.transform = "rotate(45deg)";
        dwPl.style.transform = "rotate(125deg)";
        dwPl.style.margin = "-1.5px 0px 0px 0px";
        menu.style.display = "block";
        isActive = true;
    }
}

btn.addEventListener('click',() => menuActivate())
