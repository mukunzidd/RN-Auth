import React, { Component } from 'react';
import { View, Button, Text, TextInput, ActivityIndicator } from 'react-native';
import { Card, CardSection } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    // Login event helper fx
    onButtonPress() {
        const { email, password, loading } = this.state;
        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({ loading: false })
                alert('Yeahh what bruh?')
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.setState({ loading: false })
                    })
                    .catch(() => {
                        this.setState({ error: 'Things went downhill bruh...', loading: false })
                    });
            });
    }

    // Button rendring helper
    renderButton() {
        if (this.state.loading) {
            return <ActivityIndicator animating={this.state.loading} size={'large'} />
        } else {

            return <View style={{ borderBottomColor: 'purple', height: 40, marginLeft: 50, marginTop: 40, marginRight: 50 }}>

                <Button
                    onPress={this.onButtonPress.bind(this)}
                    title="Login"
                    color="purple"
                />
            </View>
        }
    }

    render() {
        const { errorTextStyle, inputStyle } = styles;
        return (
            <View>
                <CardSection>
                    {/* <Text>Email</Text> */}
                    <TextInput
                        style={inputStyle}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        placeholder={'user@email.com'}
                    />
                </CardSection>
                <CardSection>
                    {/* <Text>Password</Text> */}
                    <TextInput
                        style={inputStyle}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        placeholder={'passWORD'}
                        secureTextEntry
                    />
                </CardSection>
                <Text style={errorTextStyle}>{this.state.error}</Text>
                {this.renderButton()}
            </View >
        );
    }
}

// Styles
const styles = {
    inputStyle: {
        flex: 1,
        padding: 10,
        fontSize: 20,
        height: 50,
        // borderColor: 'green',
        // borderBottomWidth: 2,
        // borderBottomColor: '#fff',
        textAlign: 'center'
    },
    errorTextStyle: {
        color: 'red',
        alignSelf: 'center',
        fontSize: 20,
    }
};

// Export the LoginFrom component
export default LoginForm;