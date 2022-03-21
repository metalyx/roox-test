import React from 'react';
import './Textarea.scss';

interface iTextarea {
  label: string;
  placeholder?: string;
  id?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
}

const Textarea: React.FC<iTextarea> = ({ label, placeholder, id, value, onChange, disabled = false }) => {
  return (
    <div className='textarea__wrapper'>
      <label htmlFor={id ?? 'textarea'}>{label}</label>
      <textarea
        className='textarea__textarea'
        placeholder={placeholder}
        id={id ?? 'textarea'}
        name={id ?? 'textarea'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  )
}

export default Textarea;