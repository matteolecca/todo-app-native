import 'react-native-gesture-handler';
import * as React from 'react';
import App from './App';
import { AuthContext } from './hooks/auth-hook'
import { useState } from 'react';

const Index = () => {
  const [auth, setAuth] = useState(false)
  const setAuthStatus = bool => {
    console.log('SETTITNG AUTH')
    setAuth(true)
  }
  return (
    <AuthContext.Provider  value={{ auth: auth, setAuth: setAuthStatus }}>
      <App />
    </AuthContext.Provider>
  );
};

export default Index;