import React, { useState } from 'react';
import { InputBase } from './input.styles';

interface InputProps {
    value: string;
    setValue: any;
    placeholder?: string;
}

const Input = ({value, setValue, placeholder}: InputProps) => {
    return (
        <div>
            <InputBase placeholder={placeholder} value={value} onChange={setValue}/>
        </div>
    );
}

export default Input;
