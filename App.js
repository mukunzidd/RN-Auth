import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Card } from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="RN-Auth" />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});
