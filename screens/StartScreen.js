import { View, Text, Pressable } from 'react-native';
import React from 'react';

import GlobalStyles from '../GlobalStyles';
const StartScreen = ({navigation}) => {
  return (
    <View
      style={GlobalStyles.droidSafeArea}
    >
      <View className="py-14 px-5">
        <View>
          <View className="py-8 justify-center">
            <Text className="text-2xl tracking-tight text-center">Welcome Technician To </Text>
            <Text className="text-4xl tracking-widest text-center">Kenya Auto Shops</Text>
          </View>
        </View>
        <View className="flex h-72 justify-around px-12">
          <Pressable
            className="bg-green-200 p-6 rounded-md border border-green-500 w-52"
            onPress={() => 
              navigation.navigate('Registration')
            }
          >
            <Text className="text-lg">Create An Account</Text>
          </Pressable>

          <Pressable
            className="bg-slate-200 p-6 rounded-md border border-slate-500 w-44 ml-4 justify-around"
            onPress={() =>
              navigation.navigate('Login')
            }
          >
            <Text className="text-lg">Login</Text>
          </Pressable>
        </View>
      </View> 
    </View>
  )
}

export default StartScreen