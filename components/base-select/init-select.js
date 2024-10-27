
/**
 * фун-ция инициализирует селект
 * @param {Element} mountNode нода селекта Destination или Date, куда будет встраиваться наш селект
 * @param {string[]} list список аргументов ( это массив всех возможных )
 * @param {string} activeItem строка, которая находится в head селекта
 * @param {string} label название селекта в селекте Destination или Date
 * @param {string} icon ссылка на иконку
 */
export function initSelect(mountNode, list, activeItem,label, icon) {

    /**
     * фун-ция создаёт HTML
     * @return { {select:HTMLDivElement, selectLabel:HTMLDivElement, selectWrapper:HTMLDivElement, selectList:HTMLUListElement, selectIcon:HTMLImageElement, selectHead:HTMLDivElement} }
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
     * @param {HTMLUListElement} listNode  нода списка в которую добавляются лишки
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
     * @param {HTMLUListElement} selectList нода спсика
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