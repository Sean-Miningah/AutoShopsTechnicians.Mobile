import { useState } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './AppContext'
import BottomTabNavigator from './navigation/TabNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userSettings = {
    isLoggedIn, 
    setIsLoggedIn
  }

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

