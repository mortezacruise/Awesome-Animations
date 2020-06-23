import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {
  TITLE1,
  ANIM_FLATLIST_ROUTE,
  TITLE2,
  TS_EXERCIES,
  AIRNB,
} from '../../values/string';
import {navigate} from '../../../navigationRef';

const items = [
  {title: TITLE1, route: ANIM_FLATLIST_ROUTE},
  {title: TITLE2, route: TS_EXERCIES},
  {title: TITLE2, route: AIRNB},
];

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemStyle}
            onPress={() => navigate(item.route)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  itemStyle: {marginVertical: 16},
});
export default Home;
