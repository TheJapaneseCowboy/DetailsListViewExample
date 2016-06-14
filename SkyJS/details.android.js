import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import FamilyGuyListScreen from './family_list.android';

class DetailsScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        {this.renderView()}
      </View>
    )
      ;
  }

  onBackButtonPressed () {
    this.props.navigator.push({component: FamilyGuyListScreen, name: 'FamilyList'});
  }

  renderView () {
    return (
      //View gives to the options of styling and layout of different elements
      <View  >
        <Text style={styles.welcome}>
          Welcome on the Details Screen! Please find some description here about our episode:
        </Text>
        <Text style={styles.instructions}>
          {this.props.episode.description}
        </Text>
        
        <TouchableOpacity onPress={ (event) => this.onBackButtonPressed()}>
          <Text style={styles.colorful_message}>
            GO BACK.
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 16,
      textAlign: 'center',
      color: '#00FFAA',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    colorful_message: {
      color: '#333333', textAlign: 'center',
      backgroundColor: '#EB9100',
    },
  })
  ;

module.exports = DetailsScreen;
