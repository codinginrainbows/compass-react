import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    width: 380px;

    .error {
        border: 2px solid red;
    }
`

export const Input = styled.input`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 380px;
    color: var(--white);
    background-color: var(--background);
    border: 2px solid var(--white);
    border-radius: 2rem;
    margin-top: var(--default);
    padding: 1rem 1rem;
    
    .error {
        border: 2px solid var(--yellow);
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    color: var(--white);
    position: absolute;
    left: 90%;
    bottom: 16px;
`