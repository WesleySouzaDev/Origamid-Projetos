export default function initAnimateScroll() {
  const sections = document.querySelectorAll('[data-scroll]');
  const screenHeight = window.innerHeight * 0.7;

  function animeteScroll() {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const scrollTop = window.scrollY;

      if (scrollTop > sectionTop - screenHeight) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  animeteScroll();

  window.addEventListener('scroll', animeteScroll);
}
