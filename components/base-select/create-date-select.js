import {initSelect} from "./init-select.js";

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
