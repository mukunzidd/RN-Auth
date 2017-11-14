import React from 'react';
import { StyleSheet, View, Button, Text, ActivityIndicator } from 'react-native';
import { Header, Card } from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  // Definet eh state Object
  state = { loggedIn: null };

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

    // Check if we are logged in
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        this.setState({ loggedIn: true });
        console.log(user);
      } else {
        this.setState({ loggedIn: false });
      }
    });

  }

  // Log the user out
  logOut() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log('See you soon bruh!');
    }).catch(function (error) {
      // An error happened.
      this.setState({ error: 'Cannot Sign You Out!' });
    });
  }

  // Render Content Helper
  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Button
              onPress={this.logOut.bind(this)}
              title="Log Out"
              color="purple"
            />
            <Text>
              Asoka
          </Text>
          </View>
        );
      case false:
        return <LoginForm />
      default:
        return <ActivityIndicator animating size={'large'} />
    }

  }

  render() {
    return (
      <View>
        <Header headerText={'RN-Auth'} />
        <View style={styles.container}>
          {this.renderContent()}
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
