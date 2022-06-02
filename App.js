import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/home-screen/home-screen.view';
import ResultsShowScreen from './src/screens/results-show/results-show-screen.view';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Gallery',
    },
  },
);

export default createAppContainer(navigator);
