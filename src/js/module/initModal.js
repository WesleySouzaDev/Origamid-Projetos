export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal-button="open"]');
  const modal = document.querySelector('[data-modal-container="container"]');
  const ButtonClose = document.querySelector('[data-modal-button="close"]');

  if (buttonOpen && modal && ButtonClose) {
    function toggleModal(event) {
      event.preventDefault();
      modal.classList.toggle('ativo');
    }

    function cliqueFora(event) {
      if (event.target === this) toggleModal(event);
    }

    buttonOpen.addEventListener('click', toggleModal);
    ButtonClose.addEventListener('click', toggleModal);
    modal.addEventListener('click', cliqueFora);
  }
}
