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

import { useState } from "react"
import { ISignUp } from "../../models/sign-up"
import { toast } from "react-toastify"
import { ErrorMessage } from "../../components/error-message"

import * as S from './styles'
import { useAccount } from "../../hooks/useAccount"

function SignUpTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [hasErrorUser, setHasErrorUser] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
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

    const signUpValidator = {
        emptyForm: formValues.name === '' || formValues.birth === '' || formValues.email === '',
        userAlreadyExists: formValues.user === credentials.user,
        passwordsDoesNotMatch: formValues.confirmPassword !== formValues.password,
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (signUpValidator.emptyForm) {
            setCheckCredentials(false)
            setErrorMessage('Por favor, preencha todos os campos!')
        } else if(signUpValidator.userAlreadyExists) {
            setCheckCredentials(false)
            setErrorMessage(`Usuário ${formValues.user} já existe!`)
            toast.error(`USUÁRIO ${formValues.user} JÁ EXISTE`)
            setHasErrorUser(true)
            setHasError(false)
        } else if (signUpValidator.passwordsDoesNotMatch) {
            setCheckCredentials(false)
            setErrorMessage('As senhas não correspondem!')
            setHasError(true)
            setHasErrorUser(false)
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
                    />
                    
                    <TextField 
                        content="Usuário" 
                        type="text" 
                        icon={fingerPrintIcon}
                        fieldName="user"
                        textValue={formValues.user}
                        changeEvent={handleChangeValues}
                        classTitle={hasErrorUser ? 'input-invalid' : ''}
                    />

                    {!checkCredentials && <ErrorMessage text={errorMessage.includes('Usuário') ? errorMessage : ''}/>}
                    
                     <TextField 
                        content="Nascimento" 
                        type="date" 
                        icon={cakeIcon}
                        fieldName="birth"
                        textValue={formValues.birth}
                        changeEvent={handleChangeValues}
                    />
                    
                     <TextField 
                        content="Email" 
                        type="text" 
                        icon={emailIcon}
                        fieldName="email"
                        textValue={formValues.email}
                        changeEvent={handleChangeValues}
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

                     {!checkCredentials && <ErrorMessage text={!    errorMessage.includes('Usuário') ? errorMessage : ''}/>}

                    <SubmitButton content="Registrar-se" />
                    
                    <TextLink where="/" link="Faça Login" textBefore="Já possui uma conta?" />
                </S.Form>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignUpTemplate }