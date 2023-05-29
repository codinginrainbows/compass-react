import { useState } from "react"
import userIcon from "../../../../assets/icons/user-icon.svg"
import fingerPrintIcon from "../../../../assets/icons/finger-print-icon.svg"
import cakeIcon from "../../../../assets/icons/cake-icon.svg"
import emailIcon from "../../../../assets/icons/email-icon.svg"
import lockIcon from "../../../../assets/icons/lock-icon.svg"
import shieldIcon from "../../../../assets/icons/shield-icon.svg"
import * as S from "./styles"
import { ISignUp } from "../../../../models/sign-up"
import { toast } from "react-toastify"
import { FormHeader } from "../../form/form-header"
import { FormTitle } from "../../form/form-title"
import { TextField } from "../../../atoms/text-field"
import { ErrorMessage } from "../../../atoms/error-message"
import { SubmitButton } from "../../../atoms/button"
import { TextLink } from "../../../atoms/text-link"
import { signUp } from "../../../../services/signUp"
import { useNavigate } from "react-router-dom"

function SignUpForm() {
    const [checkCredentials, setCheckCredentials] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [hasErrorUser, setHasErrorUser] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [formValues, setFormValues] = useState<ISignUp>({   
        name: '', 
        user: '', 
        birthdate: '', 
        email: '', 
        password: '', 
        confirmPassword: '' 
    })

    const navigate = useNavigate()

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
    
    const signUpValidator = {
        emptyForm: formValues.name === '' || formValues.birthdate === '' || formValues.email === '',
        passwordsDoesNotMatch: formValues.confirmPassword !== formValues.password,
    }

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (signUpValidator.emptyForm) {
            setCheckCredentials(false)
            setErrorMessage('Por favor, preencha todos os campos!')
        } else if (signUpValidator.passwordsDoesNotMatch) {
            setCheckCredentials(false)
            setErrorMessage('As senhas não correspondem!')
            setHasError(true)
            setHasErrorUser(false)
        } else {
            setCheckCredentials(true)
            setHasError(false)
            
            try {
                await signUp(formValues)
                toast.success(`${formValues.user} SUA CONTA FOI CRIADA`)
                navigate('/')
            } catch(err: any) {
                toast.error(err.response.data.message[0])
            }
        }

        return {}
    };

    return (
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
                        fieldName="birthdate"
                        textValue={formValues.birthdate}
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

                     {!checkCredentials && <ErrorMessage text={!errorMessage.includes('Usuário') ? errorMessage : ''}/>}

                    <SubmitButton content="Registrar-se" />
                    
                    <TextLink where="/" link="Faça Login" textBefore="Já possui uma conta?" />
                </S.Form>
    )
}

export { SignUpForm }