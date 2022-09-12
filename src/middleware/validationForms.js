import * as EmailValidator from 'email-validator';
import { cpf, cnpj } from 'cpf-cnpj-validator';

// ACEITA SO STRING
export function onlyString(name, strObjet) {
  const strObj = strObjet;
  const stmtstr = strObj.value.trim();
  const match = /^[a-záàâãéèêíïóôõöúçñ]+$/gi;
  if (!stmtstr) {
    return `O campo ${name} não pode ser vázios.`;
  }

  if (!stmtstr.match(match)) {
    return `O campo ${name} so aceita letras.`;
  }
  return true;
}

// ACEITA SO STRING E NÚMEROS
export function onlyStringAndNumbers(name, strObjet) {
  const strObj = strObjet;
  const stmtstr = strObj.value.trim();
  const match = /^[a-záàâãéèêíïóôõöúçñ0-9]+$/gi;
  if (!stmtstr) {
    return `O campo ${name} não pode ser vázios.`;
  }

  if (!stmtstr.match(match)) {
    return `O campo ${name} so aceita letras.`;
  }
  return true;
}

// ACEITA SO LINKS
export function onlyLinks(name, strObjet) {
  const strObj = strObjet;
  const stmtstr = strObj.value.trim();
  const match = /^[a-z/:.]+$/gi;
  if (!stmtstr) {
    return `O campo ${name} não pode ser vázios.`;
  }

  if (!stmtstr.match(match)) {
    return `O campo ${name} so aceita letras.`;
  }
  return true;
}

// ACEITA APENAS NÚMEROS
export function onlyNumbers(name, numObjet) {
  const nmbObj = numObjet;
  const stmtnmb = nmbObj.value.trim();
  const match = /^[0-9]+$/gi;
  if (!stmtnmb) {
    return `O campo ${name} não pode ser vázios.`;
  }

  if (!stmtnmb.match(match)) {
    return `O campo ${name} so aceita númeors.`;
  }
  return true;
}

// ACEITA SO EMAIL
export function onlyEmail(name, emailObjet) {
  const Obj = emailObjet;
  const stmtobj = Obj.value.trim();
  if (!stmtobj) {
    return `O campo ${name} não pode ser vázios.`;
  }

  if (!EmailValidator.validate(stmtobj)) {
    return `O campo ${name} esta incorreto!`;
  }
  return true;
}

// ACEITA SO CEP
export function onlyCep(name, cepObjet) {
  const Obj = cepObjet;
  const stmtobj = Obj.value.trim();
  const match = /^[0-9-]+$/gi;
  if (!stmtobj) {
    return `O campo ${name} não pode ser vázios.`;
  }

  if (!stmtobj.match(match)) {
    return `O campo ${name} esta incorreto!`;
  }
  return true;
}

// ACEITA SO CPF
export function onlyCpfOrCnpj(name, Objet) {
  const Obj = Objet;
  const stmtobj = Obj.value.trim();
  let res = '';
  // verifica cnpj
  if (stmtobj.length > 11) {
    if (!stmtobj) {
      return `O campo ${name} não pode ser vázios.`;
    }

    if (!cnpj.isValid(Objet)) {
      return `O campo ${name} esta incorreto!`;
    }
    res = 'CNPJ ACEITO.';
  }

  // verifica cpf
  if (stmtobj.length < 11) {
    if (!stmtobj) {
      return `O campo ${name} não pode ser vázios.`;
    }

    if (!cpf.isValid(Objet)) {
      return `O campo ${name} esta incorreto!`;
    }
    res = 'CPF ACEITO.';
  }

  return res;
}
