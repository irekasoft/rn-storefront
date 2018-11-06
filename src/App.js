import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator, createTabNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import DetailScreen from './screens/DetailScreen';
import MainCartScreen from './screens/MainCartScreen';
import ProfileHomeScreen from './screens/ProfileHomeScreen';

// REDUX
// import { Provider } from 'react-redux';
// import store from './_store/_index';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
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
    screen: MainCartScreen
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

import store from './_store/_index';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <MainTab/>
      </Provider>
    );
  }
}


export default App;
