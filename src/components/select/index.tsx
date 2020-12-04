import React, { InputHTMLAttributes }from 'react';
import styled from 'styled-components';
import { ContainerStyles, InputStyles, LabelStyles } from '../inputStyles';

//OUTRA FORMA - const SelectContainer = styled.div`
export const SelectContainer = styled.div`
    ${ContainerStyles} 
`

const Label = styled.label`
    ${LabelStyles}
`

const SelectBox = styled.select`
    ${InputStyles}
`

const Option = styled.option`
    font-size: 1.6rem;
`

//componente + propriedades que vc passará
interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: string[], 
  name: string,
  label: string
}

//htmlFor - o que o usuario passa no name
//rest dos elementos do select do html
const Select: React.FC<SelectProps> = ({options, name, label, ...rest}) => {
    return(
        <SelectContainer>
            <Label htmlFor={name}>{label}</Label>
            <SelectBox id={name} name={name}{...rest}>
                <Option value="" hidden>--SELECIONE--</Option>
                {
                    options.map((option) =>{
                        return (
                            <Option key={option}>{option}</Option>
                        );
                    })
                }
            </SelectBox>
        </SelectContainer>
    );
}

export default Select;