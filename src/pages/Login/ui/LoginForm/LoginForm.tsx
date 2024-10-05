import { Input, Link } from '@/widgets';
import { useTranslation } from 'react-i18next';
import { Button } from '@/widgets/Button/Button.tsx';
import cls from './LoginForm.module.pcss'

export const LoginForm = () => {
  const { t} = useTranslation();

  return (
    <form className={cls.form}>
      <Input />
      <Input />
      <Link to='/register'>{t('rememberPassword')}</Link>
      <Button>{t('login')}</Button>
    </form>
  );
};
