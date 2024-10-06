import { FC } from 'react';
import { ChildrenProp } from '@/types';
import { CurrentTimeViewer, DeviceNumber, LanguageSelector, Footer, } from './ui';
import cls from './AuthLayout.module.pcss'

interface AuthLayout extends ChildrenProp {
  className?: string;
}

export const AuthLayout: FC<AuthLayout> = (props) => {
  const { children, className} = props

  return (
    <>
      <div className={cls.authBackground} />
      <div className={cls.authLayout}>
        <div className={cls.item}>
          <DeviceNumber />
        </div>
        <div className={className ? className : cls.item}>
          {children}
        </div>
        <div />
        <div />
        <div className={cls.itemBottomCenter}>
          <Footer />
        </div>
        <div className={cls.itemBottomRight}>
          <LanguageSelector/>
          <CurrentTimeViewer/>
        </div>
      </div>
    </>
  );
};

