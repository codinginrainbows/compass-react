import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 10px;
    grid-auto-rows: 100px;
    grid-template-areas:
        "a a b b b b b b"
        "a a e e e e f f"
        "a a c c c c f f"
        "a a c c c c d d"
        "a a c c c c d d"
        "a a c c c c d d";
    align-items: start;
`