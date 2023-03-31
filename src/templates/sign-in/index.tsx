import { InputField } from "../../components/input-field"

import * as S from './styles'

function SignUpTemplate() {
    return (
        <S.Wrapper>
            <S.FormContainer>
                <InputField text="Nome" type="text"  />
            </S.FormContainer>
            <S.ImageContainer>
                <h1>img aqui</h1>
            </S.ImageContainer>
        </S.Wrapper>
    )
}

export { SignUpTemplate }