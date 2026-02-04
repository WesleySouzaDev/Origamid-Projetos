export default function initTooltip() {
  const tooltip = document.querySelector('[data-tooltip]');
  tooltip.addEventListener('mouseover', onMouseOver);

  function onMouseOver() {
    const tooltip = criarTooltip(this);

    onMouseMove.tooltip = tooltip;
    this.addEventListener('mousemove', onMouseMove);

    onMouseleave.tooltip = tooltip;
    onMouseleave.element = this;

    this.addEventListener('mouseleave', onMouseleave);
  }

  const onMouseleave = {
    handleEvent() {
      this.tooltip.remove();
      this.element.removeEventListener('mouseleave', this);
      this.element.removeEventListener('mousemove', this);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltip.style.top = event.pageY + 20 + 'px';
      this.tooltip.style.left = event.pageX + 20 + 'px';
    },
  };

  function criarTooltip(element) {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    const tooltipText = element.getAttribute('aria-label');
    tooltip.innerText = tooltipText;
    document.body.appendChild(tooltip);
    return tooltip;
  }
}
