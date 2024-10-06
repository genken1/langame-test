import { FC, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared';
import cls from './Button.module.pcss'

interface ButtonProps {
  children: ReactNode
  onClick?: EmptyFunction
  variant?: 'contained' | 'outlined'
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    variant = 'contained',
    type,
    disabled
  } = props;

  const className = useMemo(() => {
    return classNames(cls.button, {
      [cls.buttonOutlined]: variant === 'outlined',
      [cls.buttonContained]: variant === 'contained'
    }, [])
  }, [variant])

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
