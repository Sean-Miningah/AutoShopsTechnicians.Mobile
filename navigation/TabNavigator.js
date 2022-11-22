import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, ReviewsStackNavigator, ReportsStackNavigator, ChatStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Favourites" component={ReviewsStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Reports" component={ReportsStackNavigator} options={{headerShown: false}}/>
      <Tab.Screen name="Chat" component={ChatStackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;