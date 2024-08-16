const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 80);
})

// Slider js

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next= document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
   if(active + 1 > lengthItems){
    active = 0;
   }else{
    active = active + 1;
   }
    reloadSlider();
}

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

// let refreshSlider = setInterval(()=> {next.onclick(), 5000});
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(()=> {next.onclick(), 3000});
}
dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

setInterval(() => {
    slides[active].classList.remove('active');
    active++;
    if (active === slideCount) {
      active = 0;
    }
    slides[active].classList.add('active');
  }, 2000);

//   swiper js

const swiper = new Swiper('.swiper', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  let menu = document.querySelector('menu-icon');
  let navbar = document.querySelector('.navbar');

  console.log(menu);

  menu.onclick = ()=>{
     menu.classList.toggle('bx');
     navbar.classList.toggle('open');
  }
  