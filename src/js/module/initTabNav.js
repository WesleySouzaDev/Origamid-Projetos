export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab-menu] li');
  const tabContent = document.querySelectorAll('[data-tab-content] section');

  // Verifica se está na página certa
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo', 'show-left');

    function activeTab(index) {
      tabContent.forEach((tab) => {
        tab.classList.remove('ativo');
      });
      const classAnimete = tabContent[index].dataset.animate;
      tabContent[index].classList.add('ativo', classAnimete);
    }

    tabMenu.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
