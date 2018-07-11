import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import {Toolbar, ToolbarContent, ToolbarAction, ToolbarBackAction} from 'react-native-paper';

import Navigation from './app/navigation';

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
