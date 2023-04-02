import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

export const defaultValues = {
  name: '',
  user: '',
  birth: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpValidationSchema = joiResolver(
  Joi.object({
    name: Joi
      .string()
      .required()
      .min(2)
      .max(20)
      .trim()
      .messages({
        'string.empty': 'Preencha seu nome',
        'string.min': 'Nome deve conter no mínimo 2 caracteres',
        'string.max': 'Nome deve conter no máximo 20 caracteres',
      }),
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
    birth: Joi
      .string()
      .required()
      .min(10)
      .trim()
      .messages({
        'string.empty': 'Preencha uma data de nascimento',
        'string.min': 'Preencha a data completa',
      }),
    email: Joi
      .string()
      .required()
      .email({ tlds: { allow: false } })
      .messages({
        'string.empty': 'Preencha um email',
        'string.email': 'Deve ser um e-mail válido',
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
    confirmPassword: Joi
      .string()
      .required()
      .trim()
      .valid(Joi.ref('password'))
      .messages({
        'string.empty': 'Confirme a senha',
      })
      .options({ messages: { 'any.only': 'As senhas senhas devem ser iguais'} })
  })
)
