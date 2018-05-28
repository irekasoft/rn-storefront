import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator, createTabNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './TabNavigator/HomeStack/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import ProfileHomeScreen from './TabNavigator/ProfileStack/ProfileHomeScreen';

const MainStack = createStackNavigator({
  main_home: {
    screen: HomeScreen
  },
  main_detail:{
    screen: DetailScreen
  }
});

const CartStack = createStackNavigator({
  cart_home: {
    screen: CartScreen
  },
  cart_detail:{
    screen: DetailScreen
  }
});

const ProfileStack = createStackNavigator({
  profile_home: {
    screen: ProfileHomeScreen,
  },
});

const MainTab = createTabNavigator({

  home: {
    screen: MainStack
  },
  cart: {
    screen: CartStack
  },
  profile: {
    screen: ProfileStack
  },

},{
  
  tabBarPosition: 'bottom',

});


class App extends Component {
  render() {
    return (
      <MainTab/>
    );
  }
}


export default App;
