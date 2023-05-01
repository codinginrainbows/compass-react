import styled from 'styled-components';

export const Wrapper = styled.div`
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    font-size: var(--default);
    flex: 1;
    border: 0;
    border-radius: 30px;
    padding: 0.8rem 1.5rem;
    background-color: #27282F;
    color: var(--white);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const Icon = styled.img`
    width: 26px;
    height: 26px;
`

export const PostButton = styled.button`
    background: none;
    color: var(--white);
    border-radius: 10px;
    border: 2px solid #2E2F36;
    padding: 6px calc(var(--default) * 2);
    font-size: var(--default);

    &:hover {
        background: var(--white);
        color: #2E2F36;
    }
`