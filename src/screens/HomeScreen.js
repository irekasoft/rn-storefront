import React, { Component } from 'react';
import { 
  View, Text, Button, FlatList,
  TouchableOpacity, Platform, Image, 
  Dimensions
} from 'react-native';

import { 
  Container, Content, Header, Left, 
  Right, Icon, Card, CardItem, Body, Thumbnail 
} from 'native-base';

import axios from 'axios';
import Swiper from 'react-native-swiper';
import MyButton from '../components/MyButton';

import { connect } from 'react-redux';

import * as actions from '../_actions/_index';

const { width, height } = Dimensions.get("screen");

class HomeScreen extends Component {

  static navigationOptions = ({
    
    title: 'Product List',

  });

  constructor(props) {
    super(props);
  }

  state = {
    data: [],
  }
  
  componentDidMount(){

    console.log('hello componentDidMount');
    this.callAPI();

  }

  callAPI = () => {
    
    var url = 'https://irekaweb.com/sf/api/products/category/1';
    
    console.log('url',url);

    axios.get(url).then(response => { 
      
      console.log('response',response.data);
      this.setState( { data: response.data , refreshing: false});

    }
    ).catch(()=> {
      
      console.log('bad thing happend');

    });

  }

  // RENDER

  render() {

    console.log(this.props);
    return (
      <View>
        <View>        
          <FlatList
            style= {{ backgroundColor:'#EFEFF4', height: height }}
            data = {this.state.data}
            renderItem = {this.renderCell}
          />    
        </View>
      </View>
    );
  }

  renderCell = ({item, index}) => {
    
    return (
      <Card style={{ elevation:0, margin:16 }}>
      <CardItem button onPress={()=>this.props.navigation.navigate('main_detail', { item: item })}>
        <Left>
        <Image style={{resizeMode:'contain', width:80, height: 80}} source={{ uri: item.image_url }} />        
        <Body>          
          <Text style={{fontSize:19, fontWeight:'700'}}>{item.name} <Text>(ID:{item.id})</Text></Text>  
          <MyButton title="Add to Bag" onPress={ ()=>{ this.props.addToCart(item) }}/>    
        </Body>
        </Left>
      </CardItem>
      </Card>       
    );  
  };

}

const styles = {
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
  },
};

export default connect(null, actions)(HomeScreen);
