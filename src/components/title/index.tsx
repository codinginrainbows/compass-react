import * as S from './styles'

interface TitleProps {
    content: string;
}

function Title({ content }: TitleProps) {
    return <S.Title>{ content }</S.Title>
}

export { Title }