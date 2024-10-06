import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Link, Button } from '@/widgets';
import { useAuthContext } from '@/providers';
import { IFormErrors, OnSubmitData, passwordValidator, phoneValidator, useForm } from '@/shared';
import phoneIcon from '@/assets/svg/input/phone.svg'
import passwordIcon from '@/assets/svg/input/passport.svg'
import cls from './LoginForm.module.pcss'

export const LoginForm = () => {
  const { t } = useTranslation();
  const { setAuth } = useAuthContext()
  const { register, handleSubmit } = useForm()
  const [errors, setErrors] = useState<IFormErrors>({})

  const handleSubmitForm = (_: OnSubmitData, hasErrors: boolean, errors: IFormErrors) => {
    setErrors({ ...errors })
    if (!hasErrors) {
      setAuth({
        authenticated: true,
        token: 'your_token'
      })
    }
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit(handleSubmitForm)}>
      <Input
        {...register('phone', phoneValidator)}
        iconSrc={phoneIcon}
        label={t('input.phone.label')}
        placeholder={t('input.phone.placeholder')}
        error={errors['phone']}
      />
      <Input
        {...register('password', passwordValidator)}
        type='password'
        iconSrc={passwordIcon}
        label={t('input.password.label')}
        placeholder={t('input.password.placeholder')}
        error={errors['password']}
      />
      <Link className={cls.rememberPassword} to='/register'>{t('rememberPassword')}</Link>
      <Button
        type='submit'
        variant="contained"
      >
        {t('login')}
      </Button>
    </form>
  );
};
