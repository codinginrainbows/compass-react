import { PageTitle } from '../page-title'
import * as S from './styles'

interface FormHeaderProps {
    title: string;
    subTitle: string;
}

function FormHeader({ title, subTitle }: FormHeaderProps) {
    return (
        <S.Wrapper>
            <PageTitle content={title} />
            <S.MinorTitle>{subTitle}</S.MinorTitle>
        </S.Wrapper>
    )
}

export { FormHeader }