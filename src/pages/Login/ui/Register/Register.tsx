import { useTranslation } from 'react-i18next';
import { Link } from '@/widgets';
import cls from './Register.module.pcss'

export const Register = () => {
  const { t } = useTranslation();

  return (
    <div className={cls.register}>
      <p className={cls.registerText}>{t('haveAccount')}</p>
      <Link className={cls.registerButton} to='/register'>{t('register')}</Link>
    </div>
  );
};
