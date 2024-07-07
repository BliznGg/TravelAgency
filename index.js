// const burger = document.querySelector('.header__label')
//
// const navigation = document.querySelector('.header__navigation')
//
// burger.addEventListener("click", myFunction);
//
// function myFunction() {
//     document.body.classList.toggle('navigation-open')
// }


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



const formButtonsNodeList = document.querySelectorAll('.form__description');

formButtonsNodeList.forEach((index,item )=> {
    console.log(index)
    index.addEventListener("click", ()=> {
        formButtonsNodeList.forEach(item => {
            item.classList.remove('active');
            item.classList.add('deactive');
            // console.log('кнопка выключена'); - если вставить тут то в консоли не работает
        })
        console.log('кнопка выключена');

        index.classList.remove('deactive');
        index.classList.add('active');
        console.log('кнопка нажата');
        console.log(item)
    });
})







