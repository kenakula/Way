'use strict';

{
  const container = document.querySelector('.directions');
  const linksContainer = container.querySelector('.tabs__list');
  const links = container.querySelectorAll('.tabs__link');
  const tabsContainer = container.querySelector('.directions__list');
  const tabs = container.querySelectorAll('.directions__item');

  const closeCurrentTab = () => {
    let currentTab = tabsContainer.querySelector('.directions__item--show');

    if (currentTab) {
      currentTab.classList.remove('directions__item--show');
    }

  };

  const activeLinkChange = (index) => {
    let currentLink = linksContainer.querySelector('.tabs__link--active');

    currentLink.classList.remove('tabs__link--active');
    links[index].classList.add('tabs__link--active');
  }

  const onLinkClickTabOpen = (evt) => {
    if (evt.target.classList.contains('tabs__link')) {
      evt.preventDefault();
      closeCurrentTab();

      let newTabIndex = evt.target.dataset.tab;
      tabs[newTabIndex].classList.add('directions__item--show');
      activeLinkChange(newTabIndex);
    }
  };















  linksContainer.addEventListener('click', onLinkClickTabOpen);

}
