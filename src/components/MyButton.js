import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyButton = ( props ) => {

  return (

    <TouchableOpacity style={{backgroundColor:'skyblue', width:150, height:40, justifyContent: 'center', alignItems: 'center', borderRadius:16, margin: 5, }} onPress={()=>{ props.onPress() }} >
      <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        {props.title}
      </Text>
    </TouchableOpacity>

  );

};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
};

export default MyButton;
