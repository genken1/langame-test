import { createContext, FC, ReactNode, useContext, useState } from 'react';

interface IAuth {
  authenticated: boolean;
  token: string;
}

interface IAuthContext extends IAuth {
  setAuth: (auth: IAuth) => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

const initAuthState: IAuth = {
  authenticated: false,
  token: ''
}

export const AuthProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>(initAuthState);

  return (
    <AuthContext.Provider
      value={{
        setAuth,
        authenticated: auth.authenticated,
        token: auth.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext) as IAuthContext;

  if (context == undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return context;
};
