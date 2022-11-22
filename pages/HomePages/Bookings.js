import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';
import React, { useEffect, useContext, useState } from 'react';
import { Bars3Icon } from "react-native-heroicons/solid";

import AppContext from '../../AppContext';
import { client } from '../../API/AutoShopsApi';
import GlobalStyles from '../../GlobalStyles';
import BookingCard from '../../components/BookingCard';
import FilterPill from '../../components/FilterPill';

const Bookings = ({navigation}) => {
  const { 
    isLoggedIn, 
    loginData, 
    bookings, 
    setBookings,
    updateQueries, 
    setUpdateQueries,
  } = useContext(AppContext);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    if (isLoggedIn !== true){
      navigation.navigate("StartScreen")
    }
  });

  useEffect(() => {
    client.defaults.headers.common["Authorization"] = 'Bearer ' + loginData.access_token
    const getBookings = () => {
      client 
        .get('/bookings/')
        .then((response) => {
          console.log(response.data)
          setBookings(response.data);
        })
        .catch(e => console.log(e));
    }

    setLoading(true);
    getBookings();
    setLoading(false)
  }, [loginData, updateQueries])

  return isLoading ? <ActivityIndicator size="large" color="#0000ff"/> : (
    <View style={GlobalStyles.droidSafeArea}>

      {/* Header */}
      <View className="flex-row justify-between bg-white px-3 pt-2">
        <View className="">
          <Bars3Icon size={40} color="black" /> 
        </View>
      
          
        <View className="">
          <Text className="text-base text-teal-400 text-center"> Welcome </Text>
          <Text className="text-xl font-bold text-center">{loginData.data.first_name} {loginData.data.last_name}</Text>
        </View>

        <View className="">
        <Image
          source={{
            uri: loginData.data.photo
          }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        </View>
      </View>

      {/* FilterS */}
      <View
        className="h-120"
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-2 py-2 bg-amber-100"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <FilterPill />
          <FilterPill />
          <FilterPill />
          <FilterPill />
        </ScrollView>
      </View>
      
      

      <ScrollView
        showsVerticalScrollIndicator={false}
        className="py-2 h-max bg-amber-50"
      >
        {bookings?.map(booking => (
          <BookingCard
            key={booking.id}
            date={booking.date}
            time={booking.time}
            customerFirstName={booking.auto_user.first_name}
            customerLastName={booking.auto_user.last_name}
            customerPhoto={booking.auto_user.photo}
            customerEmail={booking.auto_user.email}
            customerInformation={booking.autouser_description}
            technicianInformaton={booking.technician_description}
            technicianPhoto={booking.technician.autouser.photo}
            status={booking.status}
          />
        ))}

      </ScrollView>
        
    </View>
  )
}

export default Bookings