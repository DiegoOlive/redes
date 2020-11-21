import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import {ContainerStyles, InputStyles, LabelStyles} from '../inputStyles';

//display: flex;
//flex-direction: column;
//margin: 10px 0;
//agora é importado de inputStyles
//const InputContainer = styled.div`
export const InputContainer = styled.div`
    ${ContainerStyles}
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;    
}

const Label =styled.label`
    ${LabelStyles}
`

const InputBox = styled.input`
    ${InputStyles}
`

const Input: React.FC <InputProps> = ({name, label, ...rest}) =>{
    return(
        <InputContainer>
            <Label htmlFor={name}> {label} </Label>
            <InputBox 
                id={name}
                name={name}
                {...rest}
            /> 
        </InputContainer>
    );
}

export default Input;