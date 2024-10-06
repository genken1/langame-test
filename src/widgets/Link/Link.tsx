import { FC, ReactNode } from 'react';
import cls from './Link.module.pcss'
import { NavLink } from 'react-router-dom';

interface LinkProps {
  children: ReactNode;
  to: string;
  className?: string;
  newTab?: boolean;
}

const newTabProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

export const Link: FC<LinkProps> = (props) => {
  const { children, to, className = '', newTab } = props;

  return (
    <NavLink {...(newTab && to ? newTabProps : {})} className={cls.link + ' ' + className} to={to}>
      {children}
    </NavLink>
  );
};
