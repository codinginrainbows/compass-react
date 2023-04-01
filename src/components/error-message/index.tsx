import * as S from './styles'

interface ErrorMessageProps {
    text?: string;
}

function ErrorMessage({ text }: ErrorMessageProps) {
    return <S.Message>{ text }</S.Message>
}

export { ErrorMessage }