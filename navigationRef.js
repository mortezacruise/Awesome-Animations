import React from 'react';
import {DrawerActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export const toggleDrawer = () => {
  console.log({navigationRef});
  navigationRef?.current.dispatch(DrawerActions.toggleDrawer());
};
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
