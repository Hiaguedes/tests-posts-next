import styled from 'styled-components';

export const InputBase = styled.input`
    width: 70vw;
    border-radius: 1rem;
    height: 3rem;
    background-color: #f1f1f1;
    outline: none;
    padding: 0 2rem; 
    border: 1px solid rgba(0,0,0,0.4);
    color: rgb(0,0,0);

    ::placeholder {
        color: rgba(0,0,0,0.6);
    }
`;