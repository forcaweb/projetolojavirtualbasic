export function verifyName() {
  const name = document.querySelector('#name');
  const stmtname = name.value.trim();
  const match = /^[a-záàâãéèêíïóôõöúçñ]+$/gi;
  // const match2 = /^[0-9]+$/gi;
  if (!stmtname) {
    return 'Campo com erro: Nome ou Sobrenome vázios.';
  }

  if (!stmtname.match(match)) {
    return 'Campo com erro: Nome ou Sobrenome so aceita letras.';
  }
  return true;
}
