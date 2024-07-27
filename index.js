const burger = document.querySelector('.header__label')

const navigation = document.querySelector('.header__navigation')

burger.addEventListener("click", myFunction);

function myFunction() {
    document.body.classList.toggle('navigation-open')
}


// Задача.
// 1) При клике на кнопку делать кнопку активную.
// т.е. При клике на кнопку изменить стили снопки.
// 1.1) значит, надо найти через DOM ноду кнопки
// затем, добавить класс, по которому будет меняться бэкграунд кнопки
// тем временем, сделать так что бы при клике не срабатывало два состояния кнопки.
// т.е. при клике

// 1) получить список кнопок через метод querySelectorAll - читать документацию как работает
// 2) при помощи цикла перебрать полученные кнопки
// 3) на каждой этерации вызываем addEventListener у ноды кнопки
// 4) при клике на кнопку делаем console.log() числа этерации конкретной кнопки.

// Есть 3 варианта событий переключения кнопки:
// 1) когда все кнопки не активны - нажимаем на любую кнопку и та кнопка становится активной
// 2) когда кнопка 1 активна - мы нажимаем на кнопку 2 и 1 кнопка становится не актвиной, а  кнопка 2 активной
// 3) когда 1 кнопка активна и мы на неё же нажимаем мы получаем все кнопки не активны

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
        console.log(event)
    })
})

// 1) реализовать селект с выбором destination. который будет копировать полную логику тега select
// 2) стилизовать input date
// 3) По умолчанию при выборе flight\hotel\rent установить занчение по умолчанию - например, дата по умочланию - определеннею, стоковую
// 4) Необходимо сохранять состояние введенных данных destination и date даже при переключении на другие вкладки формы







