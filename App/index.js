import 'react-native-gesture-handler';
import  React,  {useState, useCallback, useEffect} from 'react';
import App from './App';
import { AuthContext } from './hooks/auth-hook'
import { Appearance } from 'react-native'
import { lightColors, darkColors } from './constants/colors'
const Index = () => {
  const [auth, setAuth] = useState(false)
  const [barHidden, hideBar] = useState(false)
  const [userData, setUserData] = useState(false)
  const [colorSchemeSelected, setcolorScheme] = useState(false)
  const [modalOpened, openModal] = useState(false)
  const setAuthStatus = bool => setAuth(bool)
  const setBarHiddenStatus = bool => hideBar(bool)
  const userDataHandler = useCallback(user => setUserData(user), [])
  const openModalHandler = bool => openModal(bool)
  const colorSchemeHandler = value => setcolorScheme(value)

  useEffect(()=>{
    const appearenceMode = Appearance.getColorScheme()
    setcolorScheme(appearenceMode === 'dark' ? darkColors : lightColors)
  },[])
  
  useEffect(()=>{
    Appearance.addChangeListener(({ colorScheme }) => {
      setcolorScheme(colorScheme === 'dark' ? darkColors : lightColors)
    });
    return ()=> Appearance.removeChangeListener()
  },[])
  
  return (
      <AuthContext.Provider
        value={{
          auth: auth,
          setAuth: setAuthStatus,
          barHidden: barHidden,
          hideBar: setBarHiddenStatus,
          user: userData,
          setUserData: userDataHandler,
          colorScheme : colorSchemeSelected,
          setcolorScheme : colorSchemeHandler,
          modalOpened : modalOpened, 
          openModal : openModalHandler
        }}>
        <App />
      </AuthContext.Provider>
  );
};

export default Index;