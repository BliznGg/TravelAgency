/**
 *  блок form__list меняет цвет button`ов в форме и при клике подсвечивает выбранный блок
 */
export function changeTheColorOfTheButtons() {

    const formButtonsNodeList = document.querySelectorAll('.form__description');

    formButtonsNodeList.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault()
            const buttonNode = event.currentTarget
            const isButtonActive = buttonNode.classList.contains('active');
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
}
