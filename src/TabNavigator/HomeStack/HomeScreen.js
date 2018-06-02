import React, { Component } from 'react';
import { 
  View, Text, Button, FlatList,
  TouchableOpacity, Platform, Image, 
  Dimensions
} from 'react-native';

import axios from 'axios';
import { Container, Content, Header, Left, Right, Icon, Card, CardItem, Body, Thumbnail } from 'native-base';
import Swiper from 'react-native-swiper';
import MyButton from '../../components/MyButton';

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

  renderCell = ({item, index}) => {
    
    return (
      <Card>
      <CardItem  button onPress={()=>this.props.navigation.navigate('main_detail', { item: item })}>
        <Left>
        <Thumbnail square source={require('../../img/hijazi.jpg')} />  
        <Body>
        <Text>{item.name} <Text>(ID:{item.id})</Text></Text>  
        <MyButton title="Add to Bag" onPress={()=>{}}/>    
        </Body>
        </Left>
      </CardItem>
      </Card>       
    );

  };

  render() {
    return (
      <View>

        <View>
        
          <FlatList
            style= {{backgroundColor:'#EFEFF4', height: height }}
            data = {this.state.data}
            renderItem = {this.renderCell}
          />    


        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',

  },
};

export default HomeScreen;
