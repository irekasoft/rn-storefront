import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.state.params.item.name}</Text>
        <Text>{this.props.navigation.state.params.item.id}</Text>
        <Text>{this.props.navigation.state.params.item.sf_product_category_id}</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default DetailScreen;
