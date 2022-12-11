import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Login from './src/screens/Login';
import RootNavigation from './src/navigation/RootNavigation';
import Home from './src/screens/Home';
import Random from './src/screens/Random';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
