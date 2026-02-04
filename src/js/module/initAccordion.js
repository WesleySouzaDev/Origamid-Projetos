export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-accordion] dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function addClassAtivo() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((accordion) => {
      accordion.addEventListener('click', addClassAtivo);
    });
  }
}
