import { SubmitButton } from "../../components/button"
import { FormHeader } from "../../components/form-header"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import { ErrorMessage } from "../../components/error-message"
import { useState } from "react"
import { ISignIn } from "../../models/sign-in"
import { toast } from "react-toastify"

import * as S from './styles'
import { useAccount } from "../../hooks/useAccount"

function SignInTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formValues, setFormValues] = useState<ISignIn>({ user: '', password: '' })

    const handleChangeValues = (e: any) => {
        const textFieldName = e.target.name
        const textFieldValue = e.target.value

        setFormValues((currentValues => {
            return {
                ...currentValues, [textFieldName]: textFieldValue
            }
        }))
    }

    const { credentials } = useAccount()

    const signInValidator = {
        emptyForm: formValues.user === '' || formValues.password === '',
        wrongCredentials: credentials.user !== formValues.user || credentials.password !== formValues.password,
        login: credentials.user === formValues.user && credentials.password === formValues.password,
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (signInValidator.emptyForm) {
            setCheckCredentials(false)
            setErrorMessage('Por favor, preencha todos os campos!')
            setHasError(true)
        } else if (signInValidator.wrongCredentials) {
            setCheckCredentials(false)
            setErrorMessage('Usuário e/ou Senha inválidos. Por favor, tente novamente!')
            toast.error('CREDENCIAIS INVÁLIDAS')
            setHasError(true)
        } else if (signInValidator.login) {
            setCheckCredentials(true)
            toast.success(`${credentials.user} LOGADO COM SUCESSO`)
            setHasError(false)
        }
        return {}
    };

    return (
        <S.Wrapper>
            <S.Content>
                <S.Form onSubmit={handleSubmitForm}>
                    <FormHeader title="Olá," subTitle="Para continuar navegando de forma segura, efetue o login" />
                    
                    <FormTitle content="Login" />
                    
                    <TextField 
                        content="Usuário" 
                        type="text" 
                        icon={userIcon}
                        fieldName="user"
                        textValue={formValues.user}
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

                    {!checkCredentials && <ErrorMessage text={errorMessage}/>}
                    
                    <SubmitButton content="Logar-se" />
                    
                    <TextLink where="/sign-up" link="Registre-se" textBefore="Novo por aqui?" />
                </S.Form>
            </S.Content>
            <S.BannerCompass />
        </S.Wrapper>
    )
}

export { SignInTemplate }