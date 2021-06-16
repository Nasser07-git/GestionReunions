import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

//var width = Dimensions.get('window').width; //full width
//var height = Dimensions.get('window').height; //full height

export default class DetailReunion extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <WebView 
      source={{ uri: 'https://www.nytimes.com/2021/05/26/health/coronavirus-immunity-vaccines.html' }}
      style={{marginTop: 20, flex: 1, width:450, height:100}} />
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
