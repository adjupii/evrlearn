import { useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

export default function useLogic(action, schema, context) {
  const {
    register,
    errors,
    control,
    handleSubmit,
    watch,
    formState
  } = useForm({
    resolver: yupResolver(
      schema,
      { abortEarly: false }
    ),
    context,
    shouldFocusError: false
  });

  const onSubmit = useMemo(
    () => {
      if (typeof action !== 'function') {
        return undefined;
      }

      return handleSubmit(values => action(values));
    },
    [ handleSubmit, action ]
  );

  const childrenProps = useMemo(
    () => {
      return {
        register,
        errors,
        Controller,
        control,
        watch,
        formState
      };
    },
    [
      register,
      errors,
      control,
      watch,
      formState
    ]
  );

  return {
    onSubmit,
    childrenProps
  };
}
