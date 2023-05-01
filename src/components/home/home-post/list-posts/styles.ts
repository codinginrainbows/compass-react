import styled from 'styled-components';

export const Wrapper = styled.div`
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const UserDetails = styled.div`
`

export const When = styled.div`
    font-size: 1px;

    p {
        color: #75767D;
    }

    div {
        justify-content: left;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: var(--default) 0;
    gap: 2rem;
`

export const Text = styled.p`
    font-size: 14px;
`

export const Image = styled.img`
    width: 100%;
    height: 400px;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
`

export const Amount = styled.p`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const HowMany = styled.p`
    cursor: pointer;
    font-size: 1px;
    background: #27282F;
    color: var(--white);
    border-radius: 30%;
    padding: calc(var(--default) / 4);

    &:hover {
        background: #2D86FC;
    }
`