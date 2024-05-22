import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'

// import {HomeScreen} from './screen/HomeScreen'
import {RestaurantScreen} from './screen/RestaurantScreen'
import {CartScreen} from './screen/CartScreen';
import {OrderPreparingScreen} from './screen/OrderPreparingScreen';
import {DeliveryScreen} from './screen/DeliveryScreen';
import { OrderDetailsScreen } from './screen/OrderDetailsScreen';
import { HomeScreen } from './screen/HomeScreen';
import Login from './screen/LoginScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import AdminScreen from './screen/AdminScreen';
// import { HomeScreen } from './screen/HomeScreen';


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen} />
        <Stack.Screen name="Delivery" options={{presentation: 'modal'}} component={DeliveryScreen} />
        <Stack.Screen name="OrderDetails" options={{presentation: 'modal'}} component={OrderDetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}