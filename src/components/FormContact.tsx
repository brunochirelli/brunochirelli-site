import { Checkbox, TextField } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface IFormInputs {
  TextField: string;
  Email: string;
  MyCheckbox: boolean;
}

const FormContact = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>();
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="TextField"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Nome"
              label="Nome"
              inputProps={{ type: "text" }}
            />
          )}
        />
        <Controller
          name="Email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Email"
              label="Email"
              InputProps={{ type: "email" }}
            />
          )}
        />
        <Controller
          name="MyCheckbox"
          control={control}
          defaultValue={false}
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormContact;
