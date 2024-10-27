/**
    Инициализация бургер-меню с логикой открытия\закрытия внутри фун-ции
 */
export function initBurgerMenu() {
    // Burger
    const burger = document.querySelector('.header__label')
    const navigation = document.querySelector('.header__navigation')

    burger.addEventListener("click", toggleNavigation);

    /**
     * фун-ция удаляет класс navigation-open у body. Закрывает навигацию
     */
    function closeNavigation() {
        document.body.classList.remove('navigation-open')
    }

    /**
     * фун-ция добавляет toggle на body. Открывает\закрывает навигацию
     */
    function toggleNavigation() {
        document.body.classList.toggle('navigation-open')
    }

    document.addEventListener('click', event => {
        const target = event.target;
        const isNavigationClick = navigation.contains(target);
        const isNavigationOpen = document.body.classList.contains('navigation-open');
        const isBurgerClick = burger === target ||  burger.contains(target)

        if(isNavigationOpen && !isNavigationClick && !isBurgerClick) {
            closeNavigation()
        }
    })

    /**
     * закрывать навигацию при клике на ссылку навигации
     */
    function initCloseBurgerOnLinks() {
        const navigationList = document.querySelectorAll('.header__item')
        navigationList.forEach(link => {
            link.addEventListener('click',closeNavigation)
        })
    }
    initCloseBurgerOnLinks()
}

