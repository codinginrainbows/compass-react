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
      .trim()
      .messages({
        'string.empty': 'Preencha o nome de usuário',
      }),
    password: Joi
      .string()
      .required()
      .trim()
      .messages({
        'string.empty': 'Preencha a senha',
      }),
  })
)
