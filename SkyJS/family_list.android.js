import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
  ListView,
  View,
  Navigator
} from 'react-native';

import DetailsScreen from './details.android.js';

const EPISODE_LIST = [
  {episodeName: "Death Has a Shadow", durationInMins: 30, description: 'This is the first EPISODE ever'},
  {episodeName: "I never met a dead man", durationInMins: 30, description: 'Lorekgmkgefff sf sfsf'},
  {episodeName: "Chitty Chitty Death Bang", durationInMins: 30, description: '3rd episode ever'},
  {episodeName: "Mind over Murder", durationInMins: 44, description: '4th episode ever'},
  {episodeName: "A Hero Sits Next Door", durationInMins: 66, description: '5th episode ever'},
  {episodeName: "The Son Also Draws", durationInMins: 30, description: '6th episode ever'},
  {episodeName: "Brian: Portrait of a Dog", durationInMins: 34, description: '7th episode ever'},
  {episodeName: "Peter, Peter, Caviar Eater", durationInMins: 54, description: '8th episode ever'},
  {episodeName: "Holy Crap a Boom", durationInMins: 30, description: '9th, yeeee'},
  {episodeName: "Brian in Love", durationInMins: 34, description: '10th yyeeeee'},
  {episodeName: "Love Thy Trophy", durationInMins: 30, description: '11th yeeeeee'},
  {episodeName: "Death is a bitch", durationInMins: 33, description: '12th yeeeeee'},
  {episodeName: "The King Is Dead", durationInMins: 22, description: '13th ertgretgeerg'},
  {episodeName: "I am Peter, Hear Me Roar", durationInMins: 11, description: '14th rrrsfsfsf'},
  {episodeName: "If I'm Dyin', I'm Lyin", durationInMins: 30, description: '15th spfksfpsfk'}];


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2)=>r1 != r2,
  })
  ;

class FamilyGuyListScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        {this.renderView()}
        {this.initListView()}
      </View>
    )
  }

  initListView () {
    let listDataSource = ds.cloneWithRows(EPISODE_LIST);
    return (
      <ListView style={styles.list_container} dataSource={listDataSource}
                renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow (singleEpisode) {
    return (
      <TouchableHighlight onPress={(event) => this.loadDetailsPage(singleEpisode)}>
        <Text style={styles.list_row}>{singleEpisode.episodeName}</Text>
      </TouchableHighlight>
    )
  }

  loadDetailsPage (episodeToShow) {
    this.props.navigator.push({component: DetailsScreen, episodeDetails: episodeToShow, name: 'DetailsScreen'});
  }


  renderView () {
    return (
      //View gives to the options of styling and layout of different elements
      <View>

        <Image source={require('../images/family-guy.jpg')} style={styles.sky_image}
               resizeMode={Image.resizeMode.contain}/>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>

        <Text style={styles.colorful_message}>
          Family Guy Episode List:
        </Text>

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
    list_row: {fontSize: 18, fontFamily: 'Cochin', padding: 10},
    list_container: {flex: 1, flexDirection: 'column', backgroundColor: '#eeff33'}
    ,
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
    sky_image: {
      borderColor: '#348BE3',
      borderWidth: 5,
    },
    colorful_message: {
      color: '#333333', textAlign: 'center',
      backgroundColor: '#EB9100',
    },
  })
  ;

module.exports = FamilyGuyListScreen;
