// Burger
const burger = document.querySelector('.header__label')

const navigation = document.querySelector('.header__navigation')

burger.addEventListener("click", toggleNavigation);

function openNavigation() {
    document.body.classList.add('navigation-open')
}

function closeNavigation() {
    document.body.classList.remove('navigation-open')
}

function toggleNavigation() {
    document.body.classList.toggle('navigation-open')
}


document.addEventListener('click', event => {
    const target = event.target; // получаю элемент по которому кликнули
    const isNavigationClick = navigation.contains(target); // проверка на то был ли клик по навигации (если нода в ноде)
    const isNavigationOpen = document.body.classList.contains('navigation-open'); // проверяем открыта ли навигация
    const isBurgerClick = burger === target ||  burger.contains(target) // проверка на клик по бургеру или спану
    console.log(event.target)

    if(isNavigationOpen && !isNavigationClick && !isBurgerClick) {
        closeNavigation()
    }

// какие условия должны соблюдаться что бы при клике вне навигации навигация закрывалась
//     1) навигация должна быть открыта И клик вне области навигации И проверить что клик был не на бургер
})




/**
 *  блок form__list меняет цвет button`ов в форме при клике подсвечивая выбранный блок
 */
// form buttons style
const formButtonsNodeList = document.querySelectorAll('.form__description');

formButtonsNodeList.forEach((item) => {
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


/**
 * фун-ция инициализирует селект
 * @param {Element} mountNode нода селекта Destination или Date, куда будет встраиваться наш селект
 * @param {string[]} list список аргументов ( это массив всех возможных )
 * @param {string} activeItem строка, которая находится в head селекта
 * @param {string} label название селекта в селекте Destination или Date
 * @param {string} icon ссылка на иконку
 */
function initSelect(mountNode, list, activeItem,label, icon) {

    /**
     * фун-ция создаёт HTML
     * @return { {select:HTMLDivElement, selectLabel:HTMLDivElement, selectWrapper:HTMLDivElement, selectList:HTMLDivElement, selectIcon:HTMLDivElement, selectHead:HTMLDivElement} }
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
     * @param {HTMLDivElement} select нода самого селекта
     */
    function onSelect(select) {
        select.addEventListener('click', () => {
            select.classList.toggle('select-open');
        })
    }

    /**
     * фун-ция фильтрует и устанавливает активный элемент в селект
     * @param {string[]} list  массив всех вохзможных элементов
     * @param {string} selectedItem  элемент который будет стоять по умолчанию \\ выбранный элемент
     * @param {HTMLDivElement} listNode  нода списка в которую добавляются лишки
     * @param {HTMLDivElement} selectHead нода активного элеента
     */
    function initSelectList (list, selectedItem, listNode, selectHead ) {
        const filteredListArray = list.filter(item => item !== selectedItem) // фильтр списка без выбранного элемента

        while (listNode.firstChild) { // очистить весь список
            listNode.removeChild(listNode.firstChild)
        }
        filteredListArray.forEach(item => { // создать список заного на освное отфильтрованого списка
            const li= document.createElement('li')
            li.classList.add('select__item')
            const button = document.createElement('button')
            button.classList.add('select__button')

            button.textContent = item
            listNode.append(li)
            li.append((button))
        })

        selectHead.textContent = selectedItem // установить в дефолтное значение выбранный элемент
    }

    /**
     * фун-ция обрабатывает клики и обновляет список
     * @param {HTMLDivElement} selectList нода спсика
     * @param {HTMLDivElement} selectHead нода дива дефолтного значения
     * @param {string[]} list список всех элементов
     */
    function updateSelect(selectList, selectHead, list) {

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
     *  @param {HTMLDivElement} select нода самого селекта
     *  @param {Element} mountNode нода селекта Destination или Date, куда будет встраиваться наш селект
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
    const icon = "./assets/icons/form/vector.svg"
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
    const icon = "./assets/icons/form/calendar.svg"
    initSelect(node, days, defaultDay, label, icon)
}
createDateSelect()














