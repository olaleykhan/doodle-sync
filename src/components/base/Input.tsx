import React from 'react';
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput';
import BaseLabel from './BaseLabel';
import { ErrorMessage } from 'formik';
import { FormHelperText } from '@mui/material';

interface Props extends OutlinedInputProps {
  name: string;
  label?: string;
  secondaryLabel?: string;
  value?: string | number;
  id: string;
  placeholder?: string;
  error?: boolean;
  type: string;
  helperText?: string | false;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  touched?: boolean;
}
export default ({
  name,
  type,
  id,
  label,
  secondaryLabel,
  placeholder,
  error,
  helperText,
  value,
  min,
  max,
  touched,
  ...rest
}: Props) => {
  return (
    <>
      {label && <BaseLabel label={label} secondaryString={secondaryLabel} htmlFor={name} />}
      <OutlinedInput
        size="small"
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        error={error}
        autoComplete={name}
        fullWidth
        value={value}
        sx={{
          height: '4rem',
          '& .MuiOutlinedInput-notchedOutline': { borderColor: error ? 'error.main' : 'grey.900' },
          // style mui helper text error message
          '& ..MuiFormHelperText-root': { color: 'error.main', display: 'none' }
        }}
        inputProps={{ min, max }}
        {...rest}
      />
      {touched && error && <ErrorMessage render={(text) => <FormHelperText error> {text}</FormHelperText>} name={name} />}
    </>
  );
};


