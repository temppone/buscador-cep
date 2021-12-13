export const maskCep = (value: string): string => value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2');

export const cepRegex = /^\d{5}-\d{3}$/;

export const removeCepMask = (value: string): string => value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1$2');
