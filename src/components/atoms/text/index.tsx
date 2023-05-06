import * as S from './styles'

interface TextProps {
    content: string;
}

function Text({ content }: TextProps) {
    return <S.Title>{ content }</S.Title>
}

export { Text }