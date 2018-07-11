import React from 'react';
import { Text, View } from 'react-native';

class AuthLoading extends React.Component {
  static navigationOptions = {
    title: 'Loading...'
  }

  render() {
    return (
      <View>
        <Text>AuthLoading</Text>
      </View>
    );
  }
}

export default AuthLoading;
