import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import AnimatedFlatList from '../screens/AnimatedFlatList';
import TypeScriptExercise from '../screens/TypeScriptExercise';
import {
  ROUTEHOME,
  ANIM_FLATLIST_ROUTE,
  TS_EXERCIES,
  AIRNB,
} from '../values/string';
import Ainb from '../screens/Airnb/Airbnb';
const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={ROUTEHOME} component={Home} />
        <Stack.Screen name={ANIM_FLATLIST_ROUTE} component={AnimatedFlatList} />
        <Stack.Screen name={TS_EXERCIES} component={TypeScriptExercise} />
        <Stack.Screen name={AIRNB} component={Ainb} />
        {/* <Ainb /> */}
      </Stack.Navigator>
    </>
  );
};
