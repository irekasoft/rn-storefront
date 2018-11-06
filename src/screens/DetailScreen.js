import React, { Component } from 'react';
import { 
  View, Text, Dimensions,
  Image
} from 'react-native';

const { width, height } = Dimensions.get("screen");

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ width:width, height: 300, backgroundColor:'white'}} >
          <Image style={{resizeMode:'contain', width:'100%', height:'100%' }} square source={{ uri: this.props.navigation.state.params.item.image_url }} />          
        </View>

        <View style={{padding:16}}>
          <Text style={{ fontSize:30 }}>
            {this.props.navigation.state.params.item.name}
            <Text style={{fontSize:12}}>
              (ID{this.props.navigation.state.params.item.id})
            </Text>
            </Text>
          <Text>
            {this.props.navigation.state.params.item.sf_product_category_id}
          </Text>
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
};

export default DetailScreen;
