export function FooterFuncs() {
  async function footerInteligente() {
    const body = await document.querySelector('body');
    if (body.clientHeight > 624) {
      const footerCamp = document.querySelector('.footerContainer');
      footerCamp.setAttribute('class', 'footerContainer footerRelative');
    }
  }
  return footerInteligente();
}
