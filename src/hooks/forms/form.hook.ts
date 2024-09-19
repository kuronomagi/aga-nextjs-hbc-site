import { useForm, UseFormProps, ValidationMode } from 'react-hook-form';

export const useFormWithSchema = ({
  mode,
  reValidateMode,
  defaultValues,
  FormValues,
}: {
  mode?: keyof ValidationMode | undefined;
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  defaultValues?: any;
  FormValues?: any;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    setValue,
    setFocus,
    formState,
    getValues,
    clearErrors,
    control,
    trigger,
    setError,
    formState: { errors },
  } = useForm<typeof defaultValues>({
    criteriaMode: 'all',
    mode: mode || 'onBlur',
    reValidateMode: reValidateMode || 'onChange',
    defaultValues: defaultValues || {},
  });

  const anyErrors = errors as any;

  return {
    register,
    handleSubmit,
    errors: anyErrors,
    reset,
    resetField,
    setValue,
    setFocus,
    setError,
    formState,
    getValues,
    clearErrors,
    control,
    trigger,
  };
};
