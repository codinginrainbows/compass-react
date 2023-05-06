import { Link } from 'react-router-dom';
import * as S from './styles'

interface TextLinkProps {
    textBefore?: string;
    textAfter?: string;
    where: string;
    link: string;
}

function TextLink({ textBefore, textAfter, link, where }: TextLinkProps) {
    return (
        <S.Wrapper>
            <S.Text>{ textBefore }</S.Text> 
                <Link to={ where }> { link } </Link>
            <S.Text>{ textAfter }</S.Text> 
        </S.Wrapper>
    )
}

export { TextLink }