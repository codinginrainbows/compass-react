import * as S from './styles'

interface InputTitleProps {
    content: string;
}

function InputTitle({ content }: InputTitleProps) {
    return <S.Title>{ content }</S.Title>
}

export { InputTitle }