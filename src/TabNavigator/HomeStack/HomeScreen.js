import React, { Component } from 'react';
import { 
  View, Text, Button, FlatList,
  TouchableOpacity, Platform, Image, 
} from 'react-native';

import axios from 'axios';
import { Container, Content, Header, Left, Right, Icon, Card, CardItem } from 'native-base';
import Swiper from 'react-native-swiper';
import MyButton from '../../components/MyButton';


class HomeScreen extends Component {

  static navigationOptions = ({
    
    headerTitle: 'Product List',

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
      <View>
        <Text>{index}</Text>
        <Text>{item.name}</Text>  
        <MyButton title="go to detail" onPress={()=>this.props.navigation.navigate('main_detail', { item: item })}/>    
      </View>       
    );

  };

  render() {
    return (
      <Container>

        <Content>
        
        <Swiper style={{ height: 150}} autoplay={true} >
          
          <View style={{flex: 1}} >
            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
            source={require('../../assets/swiper_1.jpg')} />
          </View>
          <View style={{flex: 1}} >
            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
            source={require('../../assets/swiper_1.jpg')} />
          </View>
          <View style={{flex: 1}} >
            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }}
            source={require('../../assets/swiper_1.jpg')} />
          </View>


        </Swiper>

        <Card>
          <CardItem header>
            <Text>Your Recommendation</Text>
          </CardItem>
        

        <FlatList
          style= {{backgroundColor:'white'}}
          data = {this.state.data}
          renderItem = {this.renderCell}
        />

        </Card>

        </Content>

      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,

  },
};

export default HomeScreen;
