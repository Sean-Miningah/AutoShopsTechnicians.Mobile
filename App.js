import { useState } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './AppContext'
import BottomTabNavigator from './navigation/TabNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [updateQueries, setUpdateQueries] = useState(false);
  const [ bookings, setBookings ] = useState([]); 

  const userSettings = {
    isLoggedIn, 
    setIsLoggedIn,
    loginData,
    setLoginData, 
    updateQueries,
    setUpdateQueries,
    bookings, 
    setBookings
  }

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

