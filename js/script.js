// 1. Показать/Скрыть дополнительные услуги
const arrowShow = document.querySelector('.arrow-top')
const arrowHidden = document.querySelector('.arrow-bottom')
const checkboxHide = document.querySelector('.checkbox-content')
arrowShow.addEventListener ('click', function() {
  checkboxHide.style.display = 'flex'
  arrowHidden.style.display = 'block'
  arrowShow.style.display = 'none'
} )
arrowHidden.addEventListener ('click' , function() {
  checkboxHide.style.display = 'none'
  arrowShow.style.display = 'block'
  arrowHidden.style.display = 'none'
});


// 2. Показать/Скрыть меню
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let bla = document.querySelector('.active')
document.body.classList.add('_touch')
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  document.body.classList.toggle('_lock')
  

})

//3. Таймер
const countDownDate = new Date("May 5, 2022 12:00:00").getTime();
const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector('time').innerHTML =  hours + ":"
  + minutes + ":" + seconds + "  ";

  if (distance < 0) {
    clearInterval(x);
    document.querySelector('time').innerHTML = "EXPIRED";
  }
}, 1000);


//4. Валидация
  function validate(e) {
    let valid = true;
    const username = document.getElementById("username");
    const usertel = document.getElementById('usertel');

    if ( !username.value ) { 
      username.style.borderBottom = "1px solid red";
      valid = false;
    }  
    if ( !usertel.value ) { 
      usertel.style.borderBottom = "1px solid red";
      valid = false;
    }
    if( false == valid ) {
      e.preventDefault(); 
    }
    return valid;
  }

  const form = document.querySelector( '.sixth-block__button' );
  form.addEventListener( 'click', validate );



//5 Кнопки поделиться в социальных сетях
  Share = {
    me : function(el){
        Share.popup(el.href);
        return false;
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};
console.log(Share)


//6 Отзывы
function readAll() {
  var ele = document.getElementById("contentSpoiler");
  var text = document.getElementById("linkSpoiler");
  if(ele.style.display == "block") {
  ele.style.display = "none";
  text.innerHTML = "Читать полностью...";
  }
  else {
  ele.style.display = "block";
  text.innerHTML = "Скрыть";
  }
 
  } 

  function readReview() {
    var element = document.getElementById("content");
    var texta = document.getElementById("link");
    if(element.style.display == "block") {
      element.style.display = "none";
      texta.innerHTML = "Читать полностью...";
    }
    else {
      element.style.display = "block";
      texta.innerHTML = "Скрыть";
    }
  }

  function readElse() {
    var contentElse = document.getElementById("contentElse");
    var linkElse = document.getElementById("linkElse");
    if(contentElse.style.display == "block") {
      contentElse.style.display = "none";
      linkElse.innerHTML = "Читать полностью...";
    }
    else {
      contentElse.style.display = "block";
      linkElse.innerHTML = "Скрыть";
    }

  }



// 7. Cлайдер
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("autopark__content");
  let dots = document.getElementsByClassName("autopark__button");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

