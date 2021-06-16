import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddReunion from './AddReunion'
import ListReunion from './ListReunion'
import DetailReunion from './DetailReunion'

//var width = Dimensions.get('window').width; //full width
//var height = Dimensions.get('window').height; //full height

const Stack = createStackNavigator();
const myOption = {
  title:"Ma Reu",
  headerTintColor:"black",
  headerStyle:"#0066f5"
};
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListReunion">
          <Stack.Screen name="Liste des reunions" component={ListReunion} options={myOption}/>
          <Stack.Screen name="Ajouter une reunion" component={AddReunion} />
          <Stack.Screen name="Detail de la reunion" component={DetailReunion} />
        </Stack.Navigator>
      </NavigationContainer>
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
