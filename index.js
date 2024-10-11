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
})  // этот блок меняет цвет button`ов в форме при клике подсвечивая смысловой контекст происходящего

// select

// 1) реализовать селект с выбором destination. который будет копировать полную логику тега select
// 1.1) список открывается и сразу сделать проверку, где должны быть все элементы из списка кроме выбранного
// 1.2) после того как была выбрана страна, она должна переместиться на первую строку
// 1.2.1) перебирать и выводить тот список оставшихся стран кроме той, которая уже стоит первой
// 2) стилизовать input date

/**
 * фун-ция инициализирует селект
 */
function initSelect(mountNode, list, activeItem,label, icon) {
    // mountNode - нода куда будет встраиваться наш селект
    // list - список аргументов ( это массив всех возможных )

    /**
     * фун-ция создаёт HTML
     */
    function initWrapper() {  //

        const select = document.createElement('div')
        select.classList.add('select')
        select.classList.add('select-open')

        const selectLabel = document.createElement('div')
        selectLabel.classList.add('select__label')
        selectLabel.textContent = label
        select.append(selectLabel)

        const selectWrapper = document.createElement('div')
        selectWrapper.classList.add('select__wrapper');
        select.append(selectWrapper)

        const selectList = document.createElement('ul')
        selectList.classList.add('select__list')
        selectWrapper.append(selectList)

        const selectIcon = document.createElement("img")
        selectIcon.classList.add('select__icon')
        selectIcon.src = icon
        selectWrapper.append(selectIcon)

        const selectHead = document.createElement('div')
        selectHead.classList.add('select__head')
        selectWrapper.append(selectHead)

        return {
            select,
            selectLabel,
            selectWrapper,
            selectList,
            selectIcon,
            selectHead,
        }
    }

    /**
     * фун-ция закрытия и открытия селекта
     */
    function onSelect(select) {
        select.addEventListener('click', () => {
            select.classList.toggle('select-open');
        })
    }

    /**
     * фун-ция фильтрует и устанавливает активный элемент в селект
     */
    function initSelectList (list, selectedItem, listNode, selectHead ) {
        //
        // list - массив всех вохзможных элементов
        // selectedItem - элемент который будет стоять по умолчанию \\ выбранный элемент
        // listNode - нода списка в которую я добавляю лишки
        // selectHead
        const filteredListArray = list.filter(item => item !== selectedItem) // фильтр списка без выбранного элемента

        while (listNode.firstChild) { // очистить весь список
            listNode.removeChild(listNode.firstChild)
        }
        filteredListArray.forEach(item => { // создать список заного на освное отфильтрованого списка
            const li= document.createElement('li')
            li.textContent = item
            listNode.append(li)
        })

        selectHead.textContent = selectedItem // установить в дефолтное значение выбранный элемент
    }

    /**
     * фун-ция обрабатывает клики и обновляет список
     */
    function updateSelect(selectList, selectHead, list) {
        //
        // selectList - нода спсика
        // selectHead - нода дива дефолтного значения
        // list список всех элементов
        const childNodes = selectList.childNodes // получил все дочерние элементы списка
        childNodes.forEach((item) => {
                item.addEventListener('click', (event) => {
                    const text = event.target.textContent
                    initSelectList(list, text, selectList, selectHead)
                    updateSelect(selectList, selectHead, list)
                })
        })
    }

    /**
     *  фун-ция монтирования селекта в Html
     */
    function mountSelect(select, mountNode) {
        mountNode.append(select)
    }

    const {select, selectList, selectHead} = initWrapper() // инициализация скелета wrapper в первичном виде

    onSelect(select)
    initSelectList (list, activeItem, selectList, selectHead)
    updateSelect(selectList, selectHead, list)
    mountSelect(select, mountNode)

}

/**
 * передеаём аргументы в значения чистой функции initSelect для вывода данных селекта Destination
 */
function createDestinationSelect() {
    const node = document.querySelector('#destination-select')
    const countries = ['Paris, France', 'Israel, Tel-Aviv', 'Belarus, Minsk']
    const defaultCountry = 'Paris, France'
    const label = 'Destination'
    const icon = "./assets/icons/form/Vector.svg"
    initSelect(node, countries, defaultCountry, label, icon)
}
createDestinationSelect()

/**
 * передеаём аргементы в значения чистой функции initSelect для вывода данных селекта Date
 */
function createDateSelect() {
    const node = document.querySelector('#date-select')
    const days = ['1 Августа 2024','2 Августа 2024','3 Августа 2024','4 Августа 2024','5 Августа 2024','6 Августа 2024','7 Августа 2024','8 Августа 2024','9 Августа 2024']
    const defaultDay = '1 Августа 2024'
    const label = 'Date'
    const icon = "./assets/icons/form/Calendar.svg"
    initSelect(node, days, defaultDay, label, icon)
}
createDateSelect()














