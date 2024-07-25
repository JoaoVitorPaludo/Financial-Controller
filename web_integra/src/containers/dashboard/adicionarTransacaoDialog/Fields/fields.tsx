import {
  FormControl,
  Grid,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';

import type { AdicionarTransacaoDialogFormValues } from '../adicionarTransacaoDialog.types';

const Fields = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<AdicionarTransacaoDialogFormValues>();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Titulo"
          autoFocus
          {...register('titulo')}
          error={Boolean(errors.titulo)}
          helperText={errors.titulo?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="filled"
          {...register('tipo')}
          id="labelTipo"
          error={Boolean(errors.tipo)}
        >
          <InputLabel>Tipo</InputLabel>
          <Select name="tipo">
            <MenuItem value={0}>Receita</MenuItem>
            <MenuItem value={1}>Despesa</MenuItem>
          </Select>
          <FormHelperText>{errors.tipo?.message}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Valor"
          {...register('valor')}
          error={Boolean(errors.valor)}
          helperText={errors.valor?.message}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="data"
          control={control}
          defaultValue={dayjs().toString()}
          render={({ field: { value, onChange } }) => (
            <DatePicker
              label="Data"
              value={value}
              onChange={onChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={Boolean(errors.data)}
                  helperText={errors.data?.message}
                />
              )}
              inputFormat="DD/MM/YYYY"
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
