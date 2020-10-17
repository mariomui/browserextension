document.addEventListener('keydown', (e) => {
  const nState = e.key === 'ArrowRight';
  const pState = e.key === 'ArrowLeft';
  let selector;
  if (nState) selector = 'tp-rightarrow';
  else if (pState) selector = 'tp-leftarrow';
  if (selector) {
    document.querySelector(`.${selector}`).click();
  }
});
