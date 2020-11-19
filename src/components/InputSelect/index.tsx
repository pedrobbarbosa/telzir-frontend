import React, {
  OptionHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';
import { Container, Select } from './styles';

interface InputProps extends OptionHTMLAttributes<HTMLOptionElement> {
  name: string;
  inputType?: string;
}

const InputSelect: React.FC<InputProps> = ({ name, inputType, ...rest }) => {
  const DDDValues: Array<string> = ['011', '016', '017', '018'];
  const PlanValues: Array<string> = [
    'FaleMais 30',
    'FaleMais 60',
    'FaleMais 120',
  ];

  const inputRef = useRef(null);
  const {
 fieldName, defaultValue, error, registerField
} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {!inputType ? (
        <Select ref={inputRef}>
          {DDDValues.map(ddd => (
            <option key={ddd} value={ddd} {...rest}>
              {ddd}
            </option>
          ))}
        </Select>
      ) : (
        <Select ref={inputRef}>
          {PlanValues.map(plan => (
            <option key={plan} value={plan} {...rest}>
              {plan}
            </option>
          ))}
        </Select>
      )}
    </Container>
  );
};

export default InputSelect;
