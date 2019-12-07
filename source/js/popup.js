'use strict';

(function() {

  var popupTemplate = document.querySelector('#popup')
    .content
    .querySelector('.popup');

  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    var openBtn = card.querySelector('.card__info');
    var popup = renderPopup(openBtn, card);
  });

  function renderPopup(btn, card) {
    var popupClone = getPopupClone();
    var closeBtn = popupClone.querySelector('.popup__btn');

    btn.addEventListener('click', function() {
      card.appendChild(popupClone);
      closePopup(closeBtn, popupClone);
      toggle(popupClone);
    });
  };

  function getPopupClone() {
    return popupTemplate.cloneNode(true);
  };

  function closePopup(btn, popup) {
    btn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }

  function toggle(popup) {
    popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';
  }
})();
