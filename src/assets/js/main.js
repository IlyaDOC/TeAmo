$(document).ready(function () {

  // INPUT MASK PHONE NUMBER
  $('.phone-mask input').inputmask({
    "mask": "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,

    onBeforePaste: function (pastedValue, opts) {
      return pastedValue.replace(/^8/, '');
    }
  });

  copyEventsButton();
  actualYear();
});

// Копирует кнопку все события в секции события в другой блок
function copyEventsButton() {
  const eventsButton = document.querySelector('.events a.btn');
  if (eventsButton) {
    document.querySelector('.events__item-main').appendChild(eventsButton.cloneNode(true));
  }
}

function actualYear() {
  const actualDate = new Date();
  const year = actualDate.getFullYear();
  const footerDate = document.querySelector('.footer__rights span');
  if (footerDate) {
    footerDate.innerText = year;
  }

}