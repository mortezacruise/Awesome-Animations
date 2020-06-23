import React, {ReactNode} from 'react';
import {View} from 'react-native';

export default ({children, radius}) => {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius,
        overflow: 'hidden',
      }}>
      <View
        style={{
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          overflow: 'hidden',
        }}>
        {children}
      </View>
    </View>
  );
};
