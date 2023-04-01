import * as S from './styles'

interface ButtonProps {
    content: string;
}

function SubmitButton({ content }: ButtonProps) {
    return <S.Button type="submit">{ content }</S.Button>
}

export { SubmitButton }