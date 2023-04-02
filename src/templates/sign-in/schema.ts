import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

export const defaultValues = {
  user: '',
  password: '',
}

export const SignInValidationSchema = joiResolver(
  Joi.object({
    user: Joi
      .string()
      .required()
      .min(3)
      .max(20)
      .trim()
      .messages({
        'string.empty': 'Preencha o nome de usuário',
        'string.min': 'Nome de usuário deve conter no mínimo 3 caracteres',
        'string.max': 'Nome de usuário deve conter no máximo 20 caracteres',
      }),
    password: Joi
      .string()
      .required()
      .min(3)
      .max(20)
      .trim()
      .messages({
        'string.empty': 'Preencha a senha',
        'string.min': 'Senha deve conter no mínimo 3 caracteres',
        'string.max': 'Senha deve conter no máximo 20 caracteres',
      }),
  })
)
