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
            { textBefore } 
            <Link to={ where }> { link } </Link>
            { textAfter } 
        </S.Wrapper>
    )
}

export { TextLink }