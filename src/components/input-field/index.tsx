import * as S from './styles'

interface InputFieldProps {
    title: string;
    textInside: string;
    type: string;
}

function InputField({title, textInside, type}: InputFieldProps) {
    return (
        <S.Wrapper>
            <S.Label>{title}</S.Label>
            <S.Input type={type} placeholder={textInside} />
        </S.Wrapper>
    )
}

export { InputField }