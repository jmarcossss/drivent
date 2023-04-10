import { ApplicationError } from '@/protocols';

export function invalidCepError(): ApplicationError {
  return { name: 'Erro de CEP', message: '8 dígitos necessários.' };
}
