import { AuthLayout } from '@/layouts';
import { LoginForm, Logo, Register } from './ui';
import cls from './Login.module.pcss'
import { InstallMobilApp } from '@/pages/Login/ui/InstallMobilApp';

const Login = () => {
  return (
    <AuthLayout className={cls.loginPage}>
      <Logo />
      <LoginForm />
      <Register />
      <InstallMobilApp />
    </AuthLayout>
  );
};

export default Login;
