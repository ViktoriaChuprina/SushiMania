function remind(message) {
    alert("Діють знижки -20% на великі сети! Поспішіть купити великий сет!");
}
setTimeout(function(){ remind("Діють знижки -20% на великі сети! Поспішіть купити великий сет!") }, 2*60*1000)
//Ми додаємо товари за допомогою лічильника
function addHandlers(count) {
    let minus = count.querySelector(".minus");
    let number = count.querySelector(".number");
    let plus = count.querySelector(".plus");
    plus.addEventListener("click", function() {
      number.innerText++;
    });
    minus.addEventListener("click", function() {
      number.innerText--;
    });
  }
  
  let counts = document.querySelectorAll(".count");
  counts.forEach(addHandlers);
//Створюємо автоматичне слайд-шоу із зображень
let slideIndex=0;
showSlides();
function showSlides(){
  let i;
  let slides=document.getElementsByClassName('mySlides')
  let dots=document.getElementsByClassName('dot')
  for(i=0; i < slides.length; i++){
    slides[i].style.display='none';
  }
  slideIndex++
  if(slideIndex > slideIndex.length)
  {slideIndex=1}
  for(i=0; i < dots.length; i++){
    dots[i].className=dots[i].className.replace('active', '');
  }
  slides[slideIndex-1].style.display='block';
  dots[slideIndex-1].className+='active'
  setTimeout(showSlides, 3000);
}




