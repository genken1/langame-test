import { FC, ReactNode } from 'react';
import cls from './Link.module.pcss'
import { NavLink } from 'react-router-dom';

interface LinkProps {
  children: ReactNode;
  to: string;
  className?: string;
}

export const Link: FC<LinkProps> = (props) => {
  const { children, to, className = '' } = props;

  return (
    <NavLink className={cls.link + ' ' + className} to={to}>
      {children}
    </NavLink>
  );
};
