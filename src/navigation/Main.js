import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {StackNavigator} from './stackNavigator';
import DrawerScreen from '../screens/DrawerScreen';
import {navigationRef} from '../../navigationRef';
const Drawer = createDrawerNavigator();
export const Main = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />

      {/* <Drawer.Navigator
        drawerPosition={'right'}
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="Stack" component={StackNavigator} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};
