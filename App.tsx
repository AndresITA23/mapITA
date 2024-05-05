import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { initFirebase } from './src/utils';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NavBar from './src/navigation/AppNavigation';
import AccountStack from './src/navigation/AccountStack';
import Toast from 'react-native-toast-message';
import { LogBox } from 'react-native';
import 'react-native-get-random-values';

LogBox.ignoreAllLogs();


export default function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

    });
    return unsubscribe;
  }, []);

  return (
    <>
      <NavigationContainer>
        <GluestackUIProvider config={config}>
          {user ? <NavBar/> : <AccountStack />}
        </GluestackUIProvider>
      </NavigationContainer>

      <Toast />
    </>
  );
}