import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
const Home = ({navigation}) => {
  const onAnFlatListPress = () => {
    navigation.navigate('AnimatedFlat');
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={onAnFlatListPress}>
        <Text>Go To Animated Flat List</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
export default Home;
