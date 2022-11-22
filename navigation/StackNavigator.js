import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "../screens/StartScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import Bookings from "../pages/HomePages/Bookings";
import BookingEdit from "../pages/HomePages/BookingEdit";
import Reviews from "../pages/Reviews/Reviews";
import ReviewDetails from "../pages/Reviews/ReviewDetails";
import Reports from "../pages/Reports/Reports";
import Chat from "../pages/Chats/Chat";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" 
        component={StartScreen}
        option={{headerShown: false}} />
      <Stack.Screen name="Registration" 
        component={RegistrationScreen}
        option={{headerShown: false}} />
      <Stack.Screen name="Login"
        component={LoginScreen}
        option={{ headerShown: false}} />
      <Stack.Screen 
        name="Bookings Page" 
        component={Bookings} />
      <Stack.Screen
        name="Booking Edit"
        component={BookingEdit}
        options={{ 
          headerShown:true,
          title: "Confirm booking",
          headerStyle : {
            backgroundColor: 'papayawhip'
          }
        }}
      />
    </Stack.Navigator>
  )
}

const ReviewsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ReviewsPage" 
        component={Reviews} 
        options={{ 
          headerShown:true,
          title: 'Reviews On Your Service',
          headerStyle : {
            backgroundColor: 'papayawhip'
          }
        }}
      />
      <Stack.Screen 
        name="SingleReview" 
        component={ReviewDetails} 
        options={{ 
          headerShown:true,
          title: 'Review Details',
          headerStyle : {
            backgroundColor: 'papayawhip'
          }
        }}
      />
    </Stack.Navigator>
  )
}

const ReportsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="User Reports" 
        component={Reports} 
        options={{ 
            headerShown:true,
            title: 'Reports on the account',
            headerStyle : {
              backgroundColor: 'papayawhip'
            }
          }} 
        />
    </Stack.Navigator>
  )
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats" 
        component={Chat}/>
    </Stack.Navigator>
  )
}

export { HomeStackNavigator, ReviewsStackNavigator, ReportsStackNavigator, ChatStackNavigator }