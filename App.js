import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Card } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      // Initialize Firebase
      apiKey: "AIzaSyAGUiRhZV1Un2VLQpFs6UITM4J68N9kQG0",
      authDomain: "auth-ac46b.firebaseapp.com",
      databaseURL: "https://auth-ac46b.firebaseio.com",
      projectId: "auth-ac46b",
      storageBucket: "auth-ac46b.appspot.com",
      messagingSenderId: "868274336281"
    });
  }
  render() {
    return (
      <View>
        <Header headerText={'RN-Auth'} />
        <View style={styles.container}>
          <LoginForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
  },
  loginStyle: {
  }
});
