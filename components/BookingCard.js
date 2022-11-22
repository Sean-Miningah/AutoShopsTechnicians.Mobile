import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BookingCard = ({
  date,
  time, 
  customerFirstName, 
  customerLastName, 
  customerPhoto, 
  customerEmail, 
  customerInformation,
  technicianInformaton, 
  technicianPhoto,
  status
}) => {
  const navigation = useNavigation();

  const stateCheck = (state) => {
    
    if (state === false){
      console.log(state);
      return(
        <View className="flex-row items-center space-x-2">
          <View className="h-2 w-2 rounded-full bg-orange-500"></View>
          <Text className="text-orange-700">Not Accepted</Text>
        </View> 
      )

    } else if (state === true){
      return (
        <View className="flex-row items-center space-x-2">
          <View className="h-2 w-2 rounded-full bg-green-500"></View>
          <Text className="text-green-700">Accepted</Text>
        </View>
      )
    }
  }
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Booking Edit', {
          date,
          time,
          status,
          customerFirstName,
          customerLastName,
          customerInformation,
          customerPhoto
        })
      }}
    >
        <View
        className="px-1 border-b border-b-orange-200 py-3"
      >
        <View className="flex-row justify-around px-2 py-3 mx-4 bg-white rounded-md">
          <View>
            {stateCheck(status)}
          </View>
          <View>
            <Text className="text-lg">{date}</Text>
          </View>
          <View>
            <Text className="text-lg">{time.slice(0,5)}</Text>
          </View>
        </View>
        <View className="flex-row pt-1 px-2 justify-between">
          <View className="flex-row">
            <View className="absolute z-10">
              <Image
                className="h-12 w-12 rounded-full"
                source={{
                  uri:customerPhoto
                }}
              />
            </View>
            <View className="bg-gray-300 w-32 p-4 rounded-2xl ml-7 mt-4">
              <Text>{customerInformation.slice(0,50)}...</Text>
            </View>
          </View>

          <View className="flex-row">
            <View className="absolute z-10 right-0">
              <Image
                className="h-14 w-14 rounded-full"
                source={{
                  uri:technicianPhoto
                }}
              />
            </View>
            <View
              className="bg-gray-300 w-32 p-4 rounded-2xl mt-4 mr-7"
            >
              <Text>{technicianInformaton.slice(0,50)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default BookingCard