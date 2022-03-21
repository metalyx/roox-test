import React, { useState } from 'react';
import './Input.scss';

interface iInput {
  label?: string;
  placeholder: string;
  name?: string;
  id: string;
  type?: string;
  disabled: boolean;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  style?: React.CSSProperties;
}

const Input: React.FC<iInput> = ({ label, placeholder, name, id, type, disabled, value, onChange, style }) => {
  const [redBorder, setRedBorder] = useState(false);

  return (
    <div className='input__wrapper'>
      <label htmlFor={id}>{label}</label>
      <input
        style={redBorder ? {...style, borderColor: '#D91313'} : {...style}}
        placeholder={placeholder}
        name={name ?? id}
        id={id}
        type={type ?? 'text'}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => {
          if (value.trim().length === 0) {
            setRedBorder(true);
          } else {
            setRedBorder(false);
          }
        }}
      />
    </div>

  )
};

export default Input;
