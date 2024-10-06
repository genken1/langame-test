import { AuthLayout } from '@/layouts';
import { LoginForm, Logo, Register } from './ui';
import { InstallMobilApp } from '@/pages/Login/ui/InstallMobilApp';
import cls from './Login.module.pcss'

const Login = () => {
  return (
    <AuthLayout>
      <div className={cls.loginPage}>
        <Logo />
        <LoginForm />
        <Register />
        <InstallMobilApp />
      </div>
    </AuthLayout>
  );
};

export default Login;
