export function controlsqtd() {
  const addprod = document.querySelectorAll('.addQtd');
  const subprod = document.querySelectorAll('.subQtd');
  const qtds = document.querySelectorAll('.qtd');
  const prodAv = 50;
  for (let i = 0; i < addprod.length; i++) {
    addprod[i].addEventListener('click', (event) => {
      event.preventDefault();
      if (Number(qtds[i].value) === prodAv) return;
      qtds[i].value = Number(qtds[i].value) + 1;
    });

    subprod[i].addEventListener('click', (event) => {
      event.preventDefault();
      if (Number(qtds[i].value) === 1) return;
      qtds[i].value = Number(qtds[i].value) - 1;
    });
  }
}
