/**
 * Инициализация бургер-меню
 */
import {initBurgerMenu} from './components/burger-menu/init-burger-menu.js'
initBurgerMenu()

/**
 * смена цвета кнопок бургера при клике на них
 */
import {initSetBar} from "./components/form";
initSetBar()

/**
 * Инициализация селекта
 */
import {initSelect} from './components/base-select/init-select.js'

/**
 * передеаём аргументы в значения чистой функции initSelect для вывода данных селекта Destination
 */
export function createDestinationSelect() {
    const node = document.querySelector('#destination-select')
    const countries = ['Paris, France', 'Israel, Tel-Aviv', 'Belarus, Minsk']
    const defaultCountry = 'Paris, France'
    const label = 'Destination'
    const icon = "./assets/icons/vector.svg"
    initSelect(node, countries, defaultCountry, label, icon)
}
createDestinationSelect()

/**
 * передеаём аргементы в значения чистой функции initSelect для вывода данных селекта Date
 */
export function createDateSelect() {
    const node = document.querySelector('#date-select')
    const days = ['1 Августа 2024','2 Августа 2024','3 Августа 2024','4 Августа 2024','5 Августа 2024','6 Августа 2024','7 Августа 2024','8 Августа 2024','9 Августа 2024']
    const defaultDay = '1 Августа 2024'
    const label = 'Date'
    const icon = "./assets/icons/calendar.svg"
    initSelect(node, days, defaultDay, label, icon)
}
createDateSelect()

/**
 * Закрыть список селкте по клику вне селекта
 */
import {closeSelects} from './components/base-select/close-select-on-links.js'
closeSelects()

/**
 * отображение background header при скроле
 */

const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = '';
    }
});








