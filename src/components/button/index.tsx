import * as S from './styles'

interface ButtonProps {
    title: string;
}

function SubmitButton({ title }: ButtonProps) {
    return <S.Button type="submit">{ title }</S.Button>
}

export { SubmitButton }