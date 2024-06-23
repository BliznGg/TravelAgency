const burger = document.querySelector('.header__label')

const navigation = document.querySelector('.header__navigation')

burger.addEventListener("click", myFunction);

function myFunction() {
    document.body.classList.toggle('navigation-open')
}
