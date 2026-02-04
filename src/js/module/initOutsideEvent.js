export default function outsideEvent(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!element.hasAttribute(outside)) {
    element.setAttribute(outside, '');
    events.forEach((event) => {
      html.addEventListener(event, handleOutsideEvent);
    });
  }

  function handleOutsideEvent(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((event) => {
        html.removeEventListener(event, handleOutsideEvent);
      });
      callback();
    }
  }
}
