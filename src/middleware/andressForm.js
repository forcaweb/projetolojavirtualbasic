import { onlyCep } from './validationForms';

export function validCep(objValue) {
  if (objValue.length < 8) return 'Campo CEP deve conter 8 digítos no min.';
  if (objValue.length > 8) return 'Campo CEP deve conter 8 digítos no max.';
  if (onlyCep('CEP', objValue) !== true)
    return String(onlyCep('CEP', objValue));
  return true;
}
