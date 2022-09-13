import {
  onlyCep,
  onlyString,
  onlyStringAndNumbers,
  onlyStringAndNumbersOptional,
} from './validationForms';

export function validCep(objValue) {
  if (objValue.length < 8) return 'Campo CEP deve conter 8 digítos no min.';
  if (objValue.length > 8) return 'Campo CEP deve conter 8 digítos no max.';
  if (onlyCep('CEP', objValue) !== true)
    return String(onlyCep('CEP', objValue));
  return true;
}

export function validAddress(objValue) {
  if (objValue.length < 6)
    return 'Campo Endereço deve conter 6 digítos no min.';
  if (objValue.length > 50)
    return 'Campo Endereço deve conter 50 digítos no max.';
  if (onlyStringAndNumbers('Endereço', objValue) !== true)
    return String(onlyStringAndNumbers('Endereço', objValue));
  return true;
}

export function validCity(objValue) {
  if (objValue.length < 3) return 'Campo Cidade deve conter 3 digítos no min.';
  if (objValue.length > 50)
    return 'Campo Cidade deve conter 50 digítos no max.';
  if (onlyString('Cidade', objValue) !== true)
    return String(onlyString('Cidade', objValue));
  return true;
}

export function validState(objValue) {
  if (objValue.length < 2) return 'Campo Estado deve conter 2 digítos no min.';
  if (objValue.length > 2) return 'Campo Estado deve conter 2 digítos no max.';
  if (onlyString('Estado', objValue) !== true)
    return String(onlyString('Estado', objValue));
  return true;
}

export function validDistrict(objValue) {
  if (objValue.length < 3) return 'Campo Bairro deve conter 3 digítos no min.';
  if (objValue.length > 50)
    return 'Campo Bairro deve conter 50 digítos no max.';
  if (onlyStringAndNumbers('Bairro', objValue) !== true)
    return String(onlyStringAndNumbers('Bairro', objValue));
  return true;
}

export function validComplement(objValue) {
  if (onlyStringAndNumbersOptional('Complemento', objValue) !== true)
    return String(onlyStringAndNumbersOptional('Complemento', objValue));
  return true;
}

export function validNum(objValue) {
  if (objValue.length < 1) return 'Campo Número deve conter 1 digítos no min.';
  if (objValue.length > 50)
    return 'Campo Número deve conter 50 digítos no max.';
  if (onlyStringAndNumbers('Número', objValue) !== true)
    return String(onlyStringAndNumbers('Número', objValue));
  return true;
}
