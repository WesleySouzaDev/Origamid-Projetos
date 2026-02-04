export default function initAnimeNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      numeros.forEach((item) => {
        const numero = +item.innerText;
        const incremento = Math.floor(numero / 70);

        let start = 0;
        const contador = setInterval(() => {
          start += incremento;
          item.innerText = start;
          if (start > numero) {
            item.innerText = numero;
            clearInterval(contador);
          }
        }, 50 * Math.random());
      });
    }
    observer.disconnect();
  }

  const observerTarget = document.querySelector('.numeros');

  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
