import { SubmitButton } from "../../components/button"
import { FormHeader } from "../../components/form-header"
import { FormTitle } from "../../components/form-title"
import { TextField } from "../../components/text-field"
import { TextLink } from "../../components/text-link"

import userIcon from "../../assets/icons/user-icon.svg"
import lockIcon from "../../assets/icons/lock-icon.svg"

import { ErrorMessage } from "../../components/error-message"
import { useEffect, useState } from "react"
import { ISignIn } from "../../models/sign-in"
import { toast } from "react-toastify"

import * as S from './styles'
import { useAccount } from "../../hooks/useAccount"
import { useFetchAPI } from "../../hooks/useFetchAPI"
import { IUser } from "../../models/user"

function SignInTemplate() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [userExists, setUserExists] = useState(false)
    const [exe, setExe] = useState(false)
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

    const { credentials, createAccount } = useAccount()

    const { data: dataBase, state } = useFetchAPI<IUser>('user')  

    useEffect(() => {
        console.log("🚀 ~ file: index.tsx:45 ~ useEffect ~ userExists:", userExists)
    }, [userExists])

    const signInValidator = {
        emptyForm: formValues.user === '' || formValues.password === '',
        wrongCredentials: credentials.user !== formValues.user || credentials.password !== formValues.password,
        login: ''
    }

    const handleValidate = () => {
        dataBase?.users.forEach(user => {
            if(user.user === formValues.user) {
                setUserExists(true)
                createAccount(user.user, user.password)
            }
        })

        return setExe(true)
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        handleValidate()

        if (formValues.user === '' || formValues.password === '') {
            setCheckCredentials(false)
            setErrorMessage('Por favor, preencha todos os campos!')
            setHasError(true)
        } else if (!userExists) {
            setCheckCredentials(false)
            setErrorMessage('Usuário e/ou Senha inválidos. Por favor, tente novamente!')
            toast.error('CREDENCIAIS INVÁLIDAS')
            setHasError(true)
        } else if (userExists) {
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