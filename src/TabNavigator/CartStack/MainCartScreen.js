import React, { Component } from 'react';
import { View, Text, FlatList, 
  Dimensions,
} from 'react-native';

import { Container, Content, Header, Left, Right, Icon, Card, CardItem, Body, Thumbnail } from 'native-base';

const { width, height } = Dimensions.get("screen");

// redux
import { connect } from 'react-redux';


class MainCartScreen extends Component {

  constructor(props) {

    super(props);
    
  }

  state = {
    data: [],
  }

  componentDidMount(){

    console.log('hello componentDidMount');
    this.updateCart();

  }

  renderCell = ({item, index}) => {
    
    return (
      <Card>
      <CardItem  button onPress={()=>this.props.navigation.navigate('main_detail', { item: item })}>
        <Left>
        <Thumbnail style={{resizeMode:'cover'}} square source={{ uri: item.image_url }} />  
        <Body>
        <Text>{item.name} <Text>(ID:{item.id})</Text></Text>  
        </Body>
        </Left>
      </CardItem>
      </Card>       
    );

  };

  componentDidReceiveProps(nextProps) {
    this.updateCart();
  }

  updateCart = () => {

    this.setState({data: this.props.itemsInCart });

  }


  render() {

    console.log('get cart items');

    console.log(this.props.itemsInCart);

    return (
      <View style={styles.container}>
        <FlatList
            style= {{backgroundColor:'#EFEFF4', height: height }}
            data = {this.props.itemsInCart}
            renderItem = {this.renderCell}
          />    
      </View>
    );
  }
}



const styles = {
  container: {
    flex: 1,

  },
};

const mapStateToProps = (state) => {

  return state;

}


export default connect(mapStateToProps, null)(MainCartScreen);

