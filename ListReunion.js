import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import LigneReunion from './LigneReunion'
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Ajouter une nouvelle reunion",
    icon: require("./assets/ic_white.png"),
    name: "btn_add",
    position: 1
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
              ({item}) => <LigneReunion 
              title={item.title} heure={item.heure} lieu={item.lieu} listeP={item.listeP} sujet={item.sujet} id={item.id}
              />
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
    flex: 3,
    backgroundColor: '#CAFAFE',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },

  listStyle: {
    marginTop:20,
  },
});