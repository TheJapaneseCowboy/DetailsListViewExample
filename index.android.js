import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';

import FamilyGuyListView from  './SkyJS/family_list.android.js';
import DetailsScreen from './SkyJS/details.android.js';

class SkyDemo extends React.Component {

  constructor (props) {
    super(props);
    this.renderScene = this.renderSceneByName.bind(this);
  }

  //render method always called by the framework itself.
  render () {
    return (
      <Navigator style={styles.navigationContainer}
                 renderScene={this.renderScene}
                 initialRoute={{
     name:'FamilyList'
     }}/>
    )
      ;
  }

  renderSceneByName (route, navigator) {
    if (route.name == 'FamilyList') {
      return <FamilyGuyListView navigator={navigator}/>
    } else {
      return <DetailsScreen navigator={navigator} episode={route.episodeDetails}/>
    }
  }

}


let styles = StyleSheet.create({
  navigationContainer: {
    flex: 1
  }
});

AppRegistry.registerComponent('SkyDemo', () => SkyDemo);
