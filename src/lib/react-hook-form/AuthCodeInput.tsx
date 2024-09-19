import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

// module css
import styles from '~/app/styles/lib/react-hook-form/input.module.css';

export function renderAuthCodeInput({
  register,
  errors,
  inputType,
  label,
  name,
  placeholder,
  validateObject,
  wrapperClassName,
  inputClassName,
}: {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  inputType: 'tel';
  label?: string;
  name: string;
  placeholder: string;
  validateObject: {};
  wrapperClassName?: string;
  inputClassName?: string;
}) {
  return (
    <>
      <div className={`${styles.wrapper} ${!!wrapperClassName && wrapperClassName}`}>
        <input
          type={inputType}
          pattern='\d'
          inputMode='numeric'
          maxLength={1}
          className={`${styles['input-field']} ${!!errors[name] ? styles['error'] : ''} ${!!inputClassName && inputClassName}`}
          placeholder={placeholder}
          autoComplete={'off'}
          {...register(name, validateObject)}
        />
      </div>
    </>
  );
}
