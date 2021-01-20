import styled from 'styled-components'
export const MenuContainer = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    justify-content: center;
`;

export const MenuItem = styled.div`
    height: 100%;
    width: 10rem;
    background-color: rgba(255,255,250,0.8);
    color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease-in;

:hover {
    color: rgba(255,255,250,0.8);
    background-color: rgba(0,0,0,0.3);
    transition: background-color 0.2s ease-out;
    cursor: pointer;
    }
`;