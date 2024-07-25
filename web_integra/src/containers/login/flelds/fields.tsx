import { Button, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
import { LoginFormValues } from '../login.types';

export const Fields = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormValues>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <TextField
        label="Email"
        {...register('email')}
        error={Boolean(errors.email)}
        helperText={errors.email?.message}
      />
      <TextField
        {...register('password')}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        label="Senha"
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit">Entrar</Button>
    </>
  );
};
