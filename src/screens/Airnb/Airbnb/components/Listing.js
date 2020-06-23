import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from 'react-navigation-hooks';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SharedElement} from 'react-navigation-shared-element';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  listing: {
    marginBottom: 16,
  },
  image: {
    height: 150,
    width: width - 32,
    marginVertical: 8,
  },
  title: {
    fontFamily: 'CerealMedium',
    fontSize: 18,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingLabel: {
    fontFamily: 'CerealBook',
    marginLeft: 4,
  },
  superhost: {
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 1,
    padding: 4,
  },
  superhostLabel: {
    fontSize: 10,
    fontFamily: 'CerealMedium',
  },
});

const Listing = ({item}) => {
  console.log({LL: item});

  const {navigate, isFocused} = useNavigation();
  const [opacity, setOpacity] = useState(1);
  console.log('ok');

  let hasFocused = isFocused();
  console.log({opacity, hasFocused});

  useEffect(() => {
    hasFocused && setOpacity(1);
  }, [hasFocused]);
  return (
    <View key={item.id} style={styles.listing}>
      <TouchableWithoutFeedback
        onPress={() => {
          // setOpacity(0);
          navigate('Listing', {listing: item});
        }}>
        <View>
          <SharedElement id={item.id}>
            <Image
              style={[styles.image, {opacity}]}
              resizeMode="cover"
              source={item.picture}
            />
          </SharedElement>

          <View style={styles.details}>
            <View style={styles.superhost}>
              <Text style={styles.superhostLabel}>SUPERHOST</Text>
            </View>
            <View style={styles.rating}>
              <Icon name="star" color="rgb(255, 56, 92)" />
              <Text style={styles.ratingLabel}>
                {`${item.rating} (${item.ratingCount})`}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.subtitle}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Listing;
