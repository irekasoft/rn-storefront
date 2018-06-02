import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{ width:width, height: 300, backgroundColor:'skyblue'}} >
        </View>

        <Text style={{ fontSize:30 }}>{this.props.navigation.state.params.item.name}<Text style={{fontSize:12}}>(ID{this.props.navigation.state.params.item.id})</Text></Text>
        
        <Text>{this.props.navigation.state.params.item.sf_product_category_id}</Text>
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
