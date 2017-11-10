import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { Card, CardSection } from './common';

class LoginForm extends Component {
    state = { text: '' };
    render() {
        return (
            <View>
                <CardSection>
                    <TextInput
                        style={
                            {
                                flex: 1,
                                padding: 10,
                                fontSize: 25,
                                height: 40,
                                borderColor: 'green',
                                borderBottomWidth: 2,
                                borderBottomColor: '#fff',
                                textAlign: 'center'
                            }}
                        value ={ this.state.text}
                        onChangeText={text => this.setState({ text })}
                    /* value={''} */
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                        style={
                            {
                                flex: 1,
                                padding: 10,
                                fontSize: 25,
                                height: 40,
                                borderColor: 'green',
                                borderBottomWidth: 2,
                                borderBottomColor: '#fff',
                                textAlign: 'center'
                            }}
                        onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    />
                </CardSection>
                <View style={{ borderBottomColor: 'purple', height: 40, marginLeft: 50, marginRight: 50 }}>

                    <Button
                        onPress={() => { alert('Nat Happenin!!') }}
                        title="Login"
                        color="purple"
                    />
                </View>
            </View>
        );
    }
}

// Styles
const styles = {
    inputStyle: {
        height: 40,
        borderColor: 'red',
        paddingLeft: 10,
        width: 100,
    }
};

// Export the LoginFrom component
export default LoginForm;