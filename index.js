const burger = document.querySelector('.header__label')
console.log(burger)

const navigation = document.querySelector('.header__navigation')

burger.addEventListener("click", myFunction);

function myFunction() {
    console.log('ky')
    document.body.classList.toggle('navigation-open')
}
