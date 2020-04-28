'use strict';

{
  const ESC_BUTTON = 'Escape';

  const buyButtons = document.querySelectorAll('.button--buy');
  const buyModal = document.querySelector('.modal--buy');
  const closeButton = buyModal.querySelector('.modal__close');
  const modalInner = buyModal.querySelector('.modal__inner');

  const onEscModalClose = (evt) => {
    let currentActiveModal = document.querySelector('.modal--show');

    if (evt.key === ESC_BUTTON) {
      currentActiveModal.classList.remove('modal--show');
      document.removeEventListener('keydown', onEscModalClose);
    }
  };

  const onCloseButtonModalClose = () => {
    if (buyModal.classList.contains('modal--show')) {
      buyModal.classList.remove('modal--show');
    }
  };

  const onButtonClickModalOpen = (evt) => {
    evt.preventDefault();
    if (!buyModal.classList.contains('modal--show')) {
      buyModal.classList.add('modal--show');
    }

    document.addEventListener('keydown', onEscModalClose);
  };

  buyModal.addEventListener('click', function (evt) {
    if (evt.target === buyModal && evt.target !== modalInner) {
      buyModal.classList.remove('modal--show');
    }
  })

  buyButtons.forEach((it) => {
    it.addEventListener('click', onButtonClickModalOpen)
  });

  closeButton.addEventListener('click', onCloseButtonModalClose);

}
