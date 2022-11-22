import { View, Text, TextInput, Button } from 'react-native';
import React, { useEffect, useContext, useLayoutEffect } from 'react';
import { useForm, Controller } from "react-hook-form";

import AppContext from "../AppContext"; 
import { client } from "../API/AutoShopsApi";
import GlobalStyles from "../GlobalStyles";

const LoginScreen = ({ navigation }) => {
  const {setIsLoggedIn, isLoggedIn, setLoginData } = useContext(AppContext);

  const { control, handleSubmit, formState: { errors} } = useForm({
    defautlValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values) => {  
    client
      .post('login/',
        data=JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        options={
          headers: {"content-type": "application/json"}
        }
      )
      .then((response) => {
        setLoginData(response.data);
        setIsLoggedIn(true);
      })
      .catch(e => console.log(e))
  }; 

  useEffect(() => {
    if (isLoggedIn === true){
      navigation.navigate('Bookings Page')
    }
  })
  return (
    <View
      style={GlobalStyles.droidSafeArea}
      >
      <View className="pt-12 mx-4">
        <Text className="text-2xl text-orange-700">Login to Connect to Customers</Text>
      </View>
      <View className="bg-white pt-10 pb-20 px-12 h-max">
        <View className="mb-4">
          <Text className="text-1xl italic pb-2">enter your email below : </Text> 
          <View>
            <View 
              className="border-green-800 border-b  rounded-md py-2 mb-2"
              >
              <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="pl-4 text-xl"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
            </View>
            {errors.email && <Text className="text-sm tracking-tight text-amber-600">This is required.</Text>}
          </View> 
        </View>

        <View className="mb-4">
          <Text className="text-1xl italic pb-2">Enter password</Text> 
          <View>
            <View 
              className="border-green-800 border-b  rounded-md py-2 mb-2"
              >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="pl-4 text-xl"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name="password"
              />
            </View>
            {errors.password && <Text className="text-sm tracking-tight text-amber-600">This is required.</Text>}
          </View> 
        </View>

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>  
  )
}

export default LoginScreen