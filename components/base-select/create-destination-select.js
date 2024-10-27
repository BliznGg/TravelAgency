import {initSelect} from './init-select.js'
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
