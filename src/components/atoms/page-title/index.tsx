import * as S from './styles'

interface PageTitleProps {
    content: string;
}

function PageTitle({ content }: PageTitleProps) {
    return <S.Title>{ content }</S.Title>
}

export { PageTitle }