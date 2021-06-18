import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AddReunion from './AddReunion'
import ListReunion from './ListReunion'
import { BorderlessButton } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const myOption = {
  title:"Ma Reu",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor: '#136dcf',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontStyle:'italic',
  },
};
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListReunion">
          <Stack.Screen name="ListReunion" component={ListReunion} options={myOption}/>
          <Stack.Screen name="Add" component={AddReunion} options={{...myOption,title:"Ajouter une reunion"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04b8c7',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
