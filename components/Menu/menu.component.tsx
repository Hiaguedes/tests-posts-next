import React from 'react';
import { MenuContainer, MenuItem } from './menu.style';

interface MenuProps {
    options: [{
        item: string[]| React.ReactNode[],
        to: string,
    }]
};
type optionType = {
    item: string | React.ReactNode ;
    to: string
}
const Menu = ({options}: MenuProps) => {
    return (
        <MenuContainer>
            {
            options &&
            options.map((option: optionType,index: Number) => (
                <MenuItem key={String(index)}>
                    <a href={option.to} style={{color:'inherit', textDecoration: 'none', height: '100%',width:'100%', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                        {option.item}
                    </a>
                </MenuItem>
                ))
            }
        </MenuContainer>
    );
}

export default Menu;

