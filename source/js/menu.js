'use strict';

{
  const header = document.querySelector('.page-header');
  const toggler = header.querySelector('.toggler');
  const menu = header.querySelector('.page-nav');

  if (header.classList.contains('page-header--nojs')) {
    header.classList.remove('page-header--nojs');
  }

  const toggleTogglerState = () => {
    toggler.classList.contains('toggler--active') ?
      toggler.classList.remove('toggler--active') :
      toggler.classList.add('toggler--active');
  }

  const toggleMenuState = () => {
    menu.classList.contains('page-nav--opened') ?
      menu.classList.remove('page-nav--opened') :
      menu.classList.add('page-nav--opened');
  }

  const onTogglerClickMenuShow = () => {
    toggleTogglerState();
    toggleMenuState();
  }

  toggler.addEventListener('click', onTogglerClickMenuShow);

}
