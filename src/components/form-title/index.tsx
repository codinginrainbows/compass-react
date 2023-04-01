import * as S from './styles'

interface FormTitleProps {
    content: string;
}

function FormTitle({ content }: FormTitleProps) {
    return <S.Title>{ content }</S.Title>
}

export { FormTitle }