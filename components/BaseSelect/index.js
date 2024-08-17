
export default function (node, list, activeItem,label, icon) {
    // initSelect - функция создаёт ноду и монтирует ее в HTML
    // node - тег полученный через js куда будет создан наш селект
    // initSelect создание селекта по аргументам функции
    // list - массив всех элементов которые могут быть в селекте
    // activeItem - активный текущий элемент селекта
    // label - лейбл селекта
    // icon  - иконка селекта

    const select = document.createElement('div')
    select.classList.add('select')

    const selectLabel = document.createElement('div')
    selectLabel.classList.add('select__label')
    selectLabel.textContent = label
    select.append(selectLabel)

    const selectWrapper = document.createElement('div')
    selectWrapper.classList.add('select__wrapper');
    select.append(selectWrapper)

    const selectIcon = document.createElement("img")
    selectIcon.classList.add('select__icon')
    selectIcon.src=icon
    selectWrapper.append(selectIcon)

    const defaultCountry = document.createElement('div')
    defaultCountry.classList.add('select__countries')
    defaultCountry.textContent=activeItem
    selectWrapper.append(defaultCountry)

    node.append(select)

}

