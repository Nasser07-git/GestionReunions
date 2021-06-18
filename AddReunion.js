import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

var width = Dimensions.get('window').width; //full width

export default class AddReunion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      titre:'',
      time: "00-00",
      lieu:'',
      listeP:'',
      sujet:''
    };
  }

  onSubmit = async () => {
    console.log('onSubmit')
    return fetch('https://60c9e003772a760017204a5d.mockapi.io/api/reu/reunion', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title:this.state.titre,
            heure:this.state.time,
            lieu:this.state.lieu,
            listeP:this.state.listeP,
            sujet:this.state.sujet
          })    
        })
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson,
          this.props.navigation.navigate("ListReunion")
        })
        .catch((error) => {
          throw error;
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          placeholder='Titre de la reunion'
          onChangeText={(text) => {this.setState({titre: text})}} 
          placeholderTextColor="#06b7cf"
          style={styles.simpleInput} />

        <TextInput style={styles.timeInp} 
          keyboardType={"numeric"}
          value={this.state.time}
          onChangeText={(text) => {this.setState({time: text})}} 
          />

        <TextInput
          placeholder='Lieu de la reunion'
          onChangeText={(text) => {this.setState({lieu: text})}}
          placeholderTextColor="#06b7cf"
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Liste des participants a la reunion'
          onChangeText={(text) => {this.setState({listeP: text})}}
          placeholderTextColor="#06b7cf"
          style={styles.simpleInput}
          />

        <TextInput
          placeholder='Sujet de la reunion' 
          onChangeText={(text) => {this.setState({sujet: text})}}
          placeholderTextColor="#06b7cf"
          multiline = {true}
          numberOfLines = {4}
          style={styles.textAreaInput}
          />

        <TouchableOpacity style={styles.buttonSave} onPress={this.onSubmit} >
          <Text style={styles.buttonText}>Ajouter la reunion</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  simpleInput: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#136dcf', 
    paddingHorizontal: 10,
    borderWidth: 1,
  },

  timeInp: {
    width: width - 40,
    marginTop: 30,
    height: 40, 
    borderColor: '#136dcf', 
    paddingHorizontal: 10,
    borderWidth: 1,
  },

  textAreaInput: {
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#136dcf', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },

  buttonSave: {
    backgroundColor: '#136dcf',
    borderRadius: 20,
    width: width-40,
    height: 35,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white'
  },

  container: {
    flex: 1,
    backgroundColor: '#CAFAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});