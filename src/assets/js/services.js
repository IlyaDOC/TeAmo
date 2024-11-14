document.addEventListener('DOMContentLoaded', event => {
    servicesItemAction();
});

function servicesItemAction() {
    const servicesItems = document.querySelectorAll('.services__items .service__item .service__item-title');
    if (servicesItems && servicesItems.length > 0) {
        servicesItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('opened');
            });
        })
    }
}