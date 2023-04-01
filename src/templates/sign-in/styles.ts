import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
`

export const Form = styled.form`
    .input-invalid {
        border: 2px solid var(--yellow);
    }
`

export const LinkText = styled.div`
    color: var(--white);

    a {
        text-decoration: none;
        color: var(--white);
        font-weight: var(--bold);
    }
`

export const BannerCompass = styled.div`
    width: 50%;
    background-image: url('/images/banner-compass.svg');
    background-size: cover;
    z-index: 999;
`


