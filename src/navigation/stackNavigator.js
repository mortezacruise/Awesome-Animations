import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import AnimatedFlatList from '../screens/AnimatedFlatList';
const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AnimatedFlat" component={AnimatedFlatList} />
    </Stack.Navigator>
  );
};
