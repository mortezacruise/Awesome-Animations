/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View, ScrollView} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import Animated from 'react-native-reanimated';
import {Description} from './components';
// import {Listing as ListingModel} from './components/Listing';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {useMemoOne} from 'use-memo-one';
import {
  onGestureEvent,
  snapPoint,
  timing,
  useValues,
} from 'react-native-redash';

const {width, height} = Dimensions.get('window');
const SNAP_BACK = height / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width,
    height: width / 2,
  },
  thumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 16,
  },
});
const Listing = ({navigation}) => {
  const {
    Extrapolate,
    and,
    block,
    call,
    cond,
    eq,
    interpolate,
    set,
    useCode,
  } = Animated;
  const {goBack, getParam} = useNavigation();
  const listing = getParam('listing');
  const [
    translationX,
    translationY,
    velocityY,
    state,
    translateX,
    translateY,
    snapBack,
  ] = useValues([0, 0, 0, State.UNDETERMINED, 0, 0, 0], []);
  const snapTo = snapPoint(translationY, velocityY, [0, SNAP_BACK]);
  const scale = interpolate(translateY, {
    inputRange: [0, SNAP_BACK],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });
  const gestureHandler = useMemoOne(() => {
    onGestureEvent({
      translationX,
      translationY,
      velocityY,
      state,
    });
  }, []);
  useCode(
    () =>
      block([
        cond(
          and(eq(state, State.END), eq(snapTo, height), eq(snapBack, 0)),
          set(snapBack, 1),
        ),
        cond(
          snapBack,
          call([], () => goBack()),
          cond(
            eq(state, State.END),
            [
              set(
                translateX,
                timing({from: translationX, to: 0, duration: 250}),
              ),
              set(
                translateY,
                timing({from: translationY, to: 0, duration: 250}),
              ),
            ],
            [set(translateX, translationX), set(translateY, translationY)],
          ),
        ),
      ]),
    // we disable the deps because we don't want the identity change on
    // snapPoint to trigger a side effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return (
    <ScrollView style={styles.container}>
      {/* <PanGestureHandler {...gestureHandler}> */}
      <Animated.View
        style={{
          flex: 1,
          transform: [{translateX}, {translateY}, {scale}],
          // backgroundColor: 'white',
        }}>
        <ScrollView>
          <SharedElement id={listing.id}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={listing.picture}
            />
          </SharedElement>

          <SafeAreaView style={styles.thumbnailOverlay}>
            <Icon
              name="x"
              backgroundColor="transparent"
              underlayColor="transparent"
              onPress={() => goBack()}
            />
          </SafeAreaView>
        </ScrollView>
        <Description />
      </Animated.View>
      {/* </PanGestureHandler> */}
    </ScrollView>
  );
};
Listing.sharedElements = (navigation) => {
  const listing = navigation.getParam('listing');

  return [listing.id];
};
export default Listing;
