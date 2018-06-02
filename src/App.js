import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator, createTabNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './TabNavigator/HomeStack/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import DetailScreen from './TabNavigator/HomeStack/DetailScreen';
import CartScreen from './screens/CartScreen';
import ProfileHomeScreen from './TabNavigator/ProfileStack/ProfileHomeScreen';

// REDUX
// import { Provider } from 'react-redux';
// import store from './_store/_index';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './_reducers/_index';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const MainStack = createStackNavigator({
  main_home: {
    screen: HomeScreen,
    title: "Home",

  },
  main_detail:{
    screen: DetailScreen
  }
},{

  navigationOptions: {
    title: "Home",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }}/>
    )    

  }
});

const CartStack = createStackNavigator({
  cart_home: {
    screen: CartScreen
  },
  cart_detail:{
    screen: DetailScreen
  }
},{
  navigationOptions: {
    title: "Cart",
  }
});

const ProfileStack = createStackNavigator({
  profile_home: {
    screen: ProfileHomeScreen,
  },
});

const MainTab = createTabNavigator({

  home: {
    screen: MainStack,
    title: "Home",
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
      <Provider store={createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))} >
      <MainTab/>
      </Provider>
    );
  }
}


export default App;
