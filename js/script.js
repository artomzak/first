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
})