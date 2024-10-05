import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode
  onClick?: EmptyFunction
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};
