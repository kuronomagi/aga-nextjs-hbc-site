import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

// lib
import ErrorFormMessage from '~/lib/react-hook-form/ErrorFormMessage';

// module css
import styles from '~/app/styles/lib/react-hook-form/input.module.css';
import errorFormMessageStyles from '~/app/styles/lib/react-hook-form/error.form.message.module.css';

export function renderBaseInput({
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
  inputType: 'text' | 'tel' | 'email' | 'password';
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
        {!!label && <p className={styles.label}>{label}</p>}

        <input
          type={inputType}
          className={`${styles['input-field']} ${!!errors[name] ? styles['error'] : ''} ${!!inputClassName && inputClassName}`}
          placeholder={placeholder}
          autoComplete={'off'}
          // onChange={(event) => handleChangeValue(event)}
          {...register(name, validateObject)}
        />

        {/* <p>{stringifyJSON(errors?.lastNameLabel)}</p> */}

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <div key={type} className={errorFormMessageStyles.wrapper}>
                <ErrorFormMessage mt={[1, 2]}>
                  <p className={`${errorFormMessageStyles.text} ${errorFormMessageStyles.red}`}>{message}</p>
                </ErrorFormMessage>
              </div>
            ))
          }
        />
      </div>
    </>
  );
}
