import { SubmitButton } from "../../components/button"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { FormHeader } from "../../components/form-header"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import fingerPrintIcon from "../../assets/icons/finger-print-icon.svg"
import cakeIcon from "../../assets/icons/cake-icon.svg"
import emailIcon from "../../assets/icons/email-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"
import shieldIcon from "../../assets/icons/shield-icon.svg"

import { Controller, useForm } from "react-hook-form"
import { SignUpValidationSchema, defaultValues } from "./schema"
import { useEffect, useState } from "react"
import { ISignUp } from "../../models/sign-up"
import { MaskedDate } from "../../utils/date-mask"
import { toast } from "react-toastify"
import { ErrorMessage } from "../../components/error-message"

import * as S from './styles'
import { useAccount } from "../../hooks/account"

function SignUpTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [formValues, setFormValues] = useState<ISignUp>({ name: '', user: '', birth: '', email: '', password: '', confirmPassword: '' })

    const handleChangeValues = (e: any) => {
        const textFieldName = e.target.name
        const textFieldValue = e.target.value

        console.log(formValues)

        setFormValues((currentValues => {
            return {
                ...currentValues, [textFieldName]: textFieldValue
            }
        }))
    }
    
    const { createAccount, credentials } = useAccount()

    const handleSubmitForm = () => {
        if(formValues.user === credentials.user) {
            setCheckCredentials(false)
            toast.error(`USUÁRIO ${formValues.user} JÁ EXISTE`)
        } else {
            setCheckCredentials(true)
            toast.success(`${formValues.user} SUA CONTA FOI CRIADA`)

            createAccount(formValues.user, formValues.password)
        }

        return {}
    };
    
    return (
        <S.Wrapper>
            <S.Content>
                <S.Form onSubmit={handleSubmitForm}>
                    <FormHeader title="Olá," subTitle="Por favor, registre-se para continuar" />
                    
                    <FormTitle content="Registro" />
                    
                    <TextField 
                        content="Nome" 
                        type="text" 
                        icon={userIcon}
                        fieldName="name"
                        textValue={formValues.name}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />
                    
                    <TextField 
                        content="Usuário" 
                        type="text" 
                        icon={userIcon}
                        fieldName="user"
                        textValue={formValues.user}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />

                    {!checkCredentials && <ErrorMessage text='Usuário já existe!'/>}
                    
                     <TextField 
                        content="Nascimento" 
                        type="date" 
                        icon={cakeIcon}
                        fieldName="birth"
                        textValue={formValues.birth}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />
                    
                     <TextField 
                        content="Email" 
                        type="text" 
                        icon={emailIcon}
                        fieldName="email"
                        textValue={formValues.birth}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />
                    
                    <TextField 
                        content="Senha" 
                        type="password" 
                        icon={lockIcon}
                        fieldName="password"
                        textValue={formValues.password}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />
                    
                    <TextField 
                        content="Confirmar Senha" 
                        type="password" 
                        icon={shieldIcon}
                        fieldName="confirmPassword"
                        textValue={formValues.confirmPassword}
                        changeEvent={handleChangeValues}
                        classTitle={hasError ? 'input-invalid' : ''}
                    />

                     {!checkCredentials && <ErrorMessage text='As senhas não correspondem!'/>}

                    <SubmitButton content="Registrar-se" />
                    
                    <TextLink where="/" link="Faça Login" textBefore="Já possui uma conta?" />
                </S.Form>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignUpTemplate }