import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, TextInput, Dimensions, View, TouchableOpacity, FlatList } from 'react-native';
import LigneReunion from './LigneReunion'
import { FloatingAction } from "react-native-floating-action";
import { Header } from './Header';

//var width = Dimensions.get('window').width; //full width
//var height = Dimensions.get('window').height; //full height

const actions = [
  {
    text: "Add",
    icon: require("./assets/ic_white.png"),
    name: "btn_add",
    position: 1
  },
  {
    text: "share",
    icon: require("./assets/ic_share.png"),
    name: "btn_share",
    position: 2
  }
];
export default class ListReunion extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation
    this.state = {
      reunions: []
    }
  }

  componentDidMount(){
    
    fetch("https://60c9e003772a760017204a5d.mockapi.io/api/reu/reunion")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        reunions: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.reunions}
          style={styles.listStyle}
          renderItem={
            ({item}) => <LigneReunion title={item.title} heure={item.heure} lieu={item.lieu} sujet={item.sujet} />
          }>
        </FlatList>

        <FloatingAction
            actions={actions}
            onPressItem={name => {
              if (name == 'btn_add'){
                this.navigation.navigate('Add')
              }
            }}
          />

        <StatusBar style="auto" />
      </View>
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

  listStyle: {

  }

});
