
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

export default class LigneReunion extends React.Component {

  constructor(props){
    super(props);
  }

  getRandomcolor = () => {
    return "#"  + Math.floor(Math.random()*16777215).toString(16) ; 
  }

  onDelete = async (id) => {
    console.log('onDelete')
    return fetch('https://60c9e003772a760017204a5d.mockapi.io/api/reu/reunion/'+id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json, text/plain */*',
            'Content-Type': 'application/json',
          }    
        })
        .catch((error) => {
          throw error;
    })
  }

  render() {
    return (
      <View style={styles.row}>
        <Icon
            style={{ width: 80 }}
            color={this.getRandomcolor()}
            name="lens"
            size={50}
            type="material"
          />
        <View style={{width: 250}} >
          <Text style={styles.primaryText}>
            {this.props.title} - {this.props.heure} - {" "}
            {this.props.lieu}
          </Text>
          <Text style={styles.secondaryText}>
            {this.props.listeP} - {this.props.sujet}
          </Text>
        </View>
        <TouchableOpacity onPress={()=>this.onDelete(this.props.id)}>
          <View style={styles.icon} >
            <Icon 
              name='delete'
              type='material'
              color='#e8190e'/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 12 ,
    borderBottomWidth:1,
    borderBottomColor:'grey'  
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: { color: 'grey' },

  icon: {
    //flexDirection: 'row',
    //alignItems: 'flex-end'
  }
});