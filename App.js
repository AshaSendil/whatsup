import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import NewTab from './src/screen/NewsTab';
// import TabScreen from './src/screen/TabScreen';

// import SearchScreen from './src/screen/SearchScreen';
// import ColorScreen from './src/screen/ColorScreen';
// import ComponentScreen from './src/screen/ComponentScreen';
// import CounterScreen from './src/screen/CounterScreen';
// import HomeScreen from './src/screen/HomeScreen';
// import ImageScreen from './src/screen/ImageScreen';
// import ListScreen from './src/screen/ListScreen';
// import SquareScreen from './src/screen/SquareScreen';
// import TextScreen from './src/screen/TextScreen';
// import BoxScreen from './src/screen/BoxScreen';
// import ReviewScreen from './src/screen/ReviewScreen';
// import WhatupScreen from './src/screen/WhatupScreen';
import Main from './container/Main';

const navigator = createStackNavigator(
  {
    // Home: HomeScreen,
    // List: ListScreen,
    // Component: ComponentScreen,
    // Image: ImageScreen,
    // Counter: CounterScreen,
    // Color: ColorScreen,
    // Square: SquareScreen,
    // Text: TextScreen,
    // Box: BoxScreen,
    // search: SearchScreen,
    // Review: ReviewScreen,
    // New: NewTab,
    // Tab:TabScreen,
    // What: WhatupScreen,
    Main: Main,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
