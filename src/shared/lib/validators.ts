import { FormValidateFunction } from '@/shared';

export const phoneValidator: FormValidateFunction = (value) => {
  if (!value) {
    return 'Поле должно быть заполнено';
  }
  return ''
}

export const passwordValidator: FormValidateFunction = (value) => {
  if (!value) {
    return 'Поле должно быть заполнено';
  } else if (typeof value === 'string' && value.length < 6) {
    return 'Поле должно быть не менее 6 символов';
  }
  return ''
}
