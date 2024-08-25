// Burger
const burger = document.querySelector('.header__label')

const navigation = document.querySelector('.header__navigation')

burger.addEventListener("click", myFunction);

function myFunction() {
    document.body.classList.toggle('navigation-open')
}

// form buttons style
const formButtonsNodeList = document.querySelectorAll('.form__description');

formButtonsNodeList.forEach((item, index) => {
    console.log(item, index)
    item.addEventListener('click', (event) => {
        // event это объект который содержит информацию о произошедшем клике на элемент
        event.preventDefault()
        const buttonNode = event.currentTarget // event.target это Node на которую произошло событие
        const isButtonActive = buttonNode.classList.contains('active'); // явялется ли кнопкой активной кнопка на которую кликнули
        if (isButtonActive) {
            buttonNode.classList.remove('active');
        } else {
            formButtonsNodeList.forEach((item) => {
                item.classList.remove('active');
            })
            buttonNode.classList.add('active');
        }
    })
})

// select

// 1) реализовать селект с выбором destination. который будет копировать полную логику тега select
// 1.1) список открывается и сразу сделать проверку, где должны быть все элементы из списка кроме выбранного
// 1.2) после того как была выбрана страна, она должна переместиться на первую строку
// 1.2.1) перебирать и выводить тот список оставшихся стран кроме той, которая уже стоит первой
// 2) стилизовать input date
// 3) По умолчанию при выборе flight\hotel\rent установить занчение по умолчанию - например, дата по умочланию - определеннею, стоковую
// 4) Необходимо сохранять состояние введенных данных destination и date даже при переключении на другие вкладки формы

function initSelect(node, list, activeItem,label, icon) {
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

    const selectList = document.createElement('ul')
    selectList.classList.add('select__list')
    select.append(selectList)
    list.forEach(item => {
        const selectItem= document.createElement('li')
        selectItem.textContent = list
        selectList.append(selectItem)
    })

    const selectIcon = document.createElement("img")
    selectIcon.classList.add('select__icon')
    selectIcon.src=icon
    selectWrapper.append(selectIcon)

    const defaultCountry = document.createElement('div')
    defaultCountry.classList.add('select__countries')
    defaultCountry.textContent = activeItem
    selectWrapper.append(defaultCountry)

    node.append(select)
}

function createDestinationSelect() {
    const node = document.querySelector('#destination-select')
    const countries = ['Paris, France', 'Israel, Tel-Aviv', 'Belarus, Minsk']
    const defaultCountry = 'Paris, France'
    const label = 'Destination'
    const icon = "./assets/icons/form/Vector.svg"
    initSelect(node, countries, defaultCountry, label, icon)
}
createDestinationSelect()

function createDateSelect() {
    const node = document.querySelector('#date-select')

    const days = ['1 Августа 2024','2 Августа 2024','3 Августа 2024','4 Августа 2024','5 Августа 2024','6 Августа 2024','7 Августа 2024','8 Августа 2024','9 Августа 2024']

    // const date = new Date();
    // const year = date.getFullYear();
    // const month = String(date.getMonth() + 1).padStart(2, '0');
    // const day = String(date.getDate()).padStart(2, '0');
    // const days = `${year}-${month}-${day}`;

    const defaultDay = '1 Августа 2024'
    const label = 'Date'
    const icon = "./assets/icons/form/Calendar.svg"
    initSelect(node, days, defaultDay, label, icon)
}
createDateSelect()


//исправтть пнг на свг иконки
// удалить лишние классы инпута main



// select.addEventListener('click', toggleSelect);

// function toggleSelect() {
//     selectList.classList.toggle('select-open')
// }





// const selectDefault = countries.filter(item => item !== defaultCountry)
// console.log(selectDefault)












