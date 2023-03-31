import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    overflow: hidden;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
`

export const InfoContainer = styled.section`
    width: 380px;
    margin-bottom: 8rem;
`

export const Title = styled.h1``

export const MinorTitle = styled.h4`
    font-weight: var(--regular);
`

export const Form = styled.form``

export const LinkText = styled.div`
    color: var(--white);

    a {
        text-decoration: none;
        color: var(--white);
    }
`

export const BannerCompass = styled.div`
    width: 50%;
    background-image: url('/images/banner-compass.svg');
    background-size: cover;
    z-index: 999;
`

export const Image = styled.img``


