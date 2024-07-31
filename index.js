// Burger
const burger = document.querySelector('.header__label')

const navigation = document.querySelector('.header__navigation')

burger.addEventListener("click", myFunction);

function myFunction() {
    document.body.classList.toggle('navigation-open')
}

// form buttons style
const formButtonsNodeList = document.querySelectorAll('.form__description');

formButtonsNodeList.forEach((item,index )=> {
    console.log(item, index)
    item.addEventListener('click', (event) => {
        // event это объект который содержит информацию о произошедшем клике на элемент
        event.preventDefault()
        const buttonNode = event.currentTarget // event.target это Node на которую произошло событие
        const isButtonActive = buttonNode.classList.contains('active'); // явялется ли кнопкой активной кнопка на которую кликнули
        if(isButtonActive) {
            buttonNode.classList.remove('active');
        } else {
            formButtonsNodeList.forEach((item)=>{
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


const select = document.querySelector('.form__wrapper')
const selectList = document.querySelector('.form__SelectList')
const allSelectItems = document.querySelectorAll('.form__SelectItems')

// select.addEventListener('click',toggleSelect);
// function toggleSelect() {
//     selectList.classList.toggle('select-open')
//     debugger
// }

function initSelect(node, list, activeItem,label, icon) {
    // node - тег полученный через js куда будет создан наш селект
    // initSelect создание селекта по аргументам функции
    // list - массив всех элементов которые могут быть в селекте
    // activeItem - активный текущий элемент селекта
    // label - лейбл селекта
    // icon  - иконка селекта

    allSelectItems.forEach((item, index)=>{
        console.log(item, index)
        item.addEventListener('click', (event)=>{
        })
    } )
    node.classList.add('form__wrapper')
}

// дз
// 1) создать структуру внутри html. СО ВСЕМИ стилями и атрибутами
// 2) итоговую ноду которую я получу вставить внутрь node

function createDestinationSelect() {
    const node = document.querySelector('#destination-select')
    const countries = ['Paris, France', 'Israel, Tel-Aviv', 'Belarus, Minsk']
    const defaultCountry = 'Paris, France'
    const label = 'Destination'
    const icon = "./assets/icons/form/Location.png"
    initSelect(node, countries, defaultCountry, label, icon)
}
createDestinationSelect()

// в функции:
// 1) получить список опций без дефолтного значения ..- filter
// 2) создать структуру селекта в jS через creat element - читать

const selectDefault = countries.filter(item => item !== defaultCountry)
console.log(selectDefault)  //тут я получил дефолтное значение из массива












