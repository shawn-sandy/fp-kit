import React, { ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Enter text to speak"
      style={{ width: '100%', height: '100px', marginBottom: '10px' }}
    />
  );
};

export default TextInput;
