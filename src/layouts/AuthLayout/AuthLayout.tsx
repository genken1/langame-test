import { FC } from 'react';
import { ChildrenProp } from '@/types';
import { CurrentTimeViewer, DeviceNumber, LanguageSelector, } from './ui';
import cls from './AuthLayout.module.pcss'

interface AuthLayout extends ChildrenProp {
  className?: string;
}

export const AuthLayout: FC<AuthLayout> = (props) => {
  const { children, className} = props

  return (
    <>
      <div className={cls.background} />
      <div className={cls.container}>
        <div className={cls.item}>
          <DeviceNumber />
        </div>
        <div className={className ? className : cls.item}>
          {children}
        </div>
        <div className={cls.item__right}>
          <div className={cls.item__rightCenter}>
            <LanguageSelector />
            <CurrentTimeViewer />
          </div>
        </div>
      </div>
    </>
  );
};

