'use strict';

{
  const container = document.querySelector('.tabs');
  const list = container.querySelector('.tabs__list');

  // проверка на тач-устройство

  let isTouchCapable = 'ontouchstart' in window ||
    window.DocumentTouch && document instanceof window.DocumentTouch ||
    navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0;

  // drag'n'drop для мыши. При ширине меньшне 1024px элементы списка скрываются, список получает позиционирование relative, на больших ширинах drag'n'drop не работает.

  list.addEventListener('mousedown', (evt) => {
    evt.preventDefault();
    let shiftX = evt.clientX - list.getBoundingClientRect().left;

    const onMouseMoove = (evt) => {
      let newLeft = evt.clientX - shiftX - container.getBoundingClientRect().left;
      list.style.left = newLeft + 'px';
    };

    const onMouseUp = (evt) => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMoove);
    }

    document.addEventListener('mousemove', onMouseMoove);
    document.addEventListener('mouseup', onMouseUp);
  })

  if (isTouchCapable) {
    list.addEventListener('touchstart', (touchEvt) => {

      touchEvt.preventDefault();
      let shiftX = touchEvt.touches[0].clientX - list.getBoundingClientRect().left;

      const onMouseMoove = (touchEvt) => {
        let newLeft = touchEvt.touches[0].clientX - shiftX - container.getBoundingClientRect().left;
        list.style.left = newLeft + 'px';
      }

      const onMouseUp = (touchEvt) => {
        document.removeEventListener('touchend', onMouseUp);
        document.removeEventListener('touchmove', onMouseMoove);
      };

      document.addEventListener('touchmove', onMouseMoove);
      document.addEventListener('touchend', onMouseUp);
    });
  }

}
