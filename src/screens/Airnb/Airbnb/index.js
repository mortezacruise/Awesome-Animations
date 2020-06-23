// import {createStackNavigator} from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import Explore from './Explore';
import Listing from './Listing';

export const assets = [
  require('./assets/tiny-home.jpg'),
  require('./assets/cook-house.jpg'),
  require('./assets/host.jpg'),
];

export const fonts = {
  CerealBook: require('./assets/fonts/AirbnbCerealBook.ttf'),
  CerealMedium: require('./assets/fonts/AirbnbCerealMedium.ttf'),
  CerealLight: require('./assets/fonts/AirbnbCerealLight.ttf'),
};

export default createSharedElementStackNavigator(
  {
    Explore,
    Listing,
  },
  {
    mode: 'modal',
    headerMode: 'none',
    gestureEnabled: false,
    defaultNavigationOptions: {
      cardStyleInterpolator: ({current: {progress: opacity}}) => {
        return {cardStyle: {opacity}};
      },
      cardStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
);
