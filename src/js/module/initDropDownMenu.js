import initOutsideEvent from './initOutsideEvent.js';

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown-menu]');
  const arrayEvents = ['touchstart', 'click'];

  dropdownMenus.forEach((menu) => {
    arrayEvents.forEach((handleEvent) => {
      menu.addEventListener(handleEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    initOutsideEvent(this, arrayEvents, () => {
      this.classList.remove('ativo');
    });
  }
}
