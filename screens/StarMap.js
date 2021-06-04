import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';

import { WebView } from 'react-native-webview';

const {longitude, latitude} = this.state;
const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'

export default class StarMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longitude: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height:40, borderColor:'grey', borderWidth:1}}
          placeholder="Latitude"
          placeholderTextColor="#ffff#000000"
          onChangeText={(text) => {
            this.setState({
              latitude: text,
            });
          }}
      
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Longitude"
          onChangeText={(text) => {
            this.setState({
              longitude: text,
            });
          }}
       
        />
        <WebView
          scalesPageToFit={true}
          source={{ uri: path }}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
