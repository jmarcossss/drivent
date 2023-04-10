import { ApplicationError } from '@/protocols';

export function cepError(): ApplicationError {
  return { name: 'Erro de CEP', message: '8 dígitos necessários.' };
}
