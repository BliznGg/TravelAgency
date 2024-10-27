/**
 * фун-ция закрывает селект по клику вне селкта
 */
export function closeSelects() {
    function closeAllSelects() {
        const selects = document.querySelectorAll('.select');
        selects.forEach(select => {
            select.classList.add('select-open');
        });
    }

    function initCloseSelectLinks() {
        document.addEventListener('click', event => {
            const target = event.target;
            const selects = document.querySelectorAll('.select');
            const arrSelects = Array.from(selects)

            const isClickOnSelect = arrSelects.reduce((accum, select) => {
                return select.contains(target) || accum;
            }, false)

            if (!isClickOnSelect) {
                closeAllSelects();
            }
        });
    }
    initCloseSelectLinks()
}
