// imports
import React from 'react';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
// import Button from './Button';

// Make a component
const StuffDetail = (props) => {
    const { textStyle, artistStyle, profileStyle, btnStyle, viewStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={profileStyle}
                        source={{ uri: props.stuff.thumbnail_image }}
                    />
                </View>
                <View style={artistStyle}>
                    <Text style={textStyle}>Album Title: {props.stuff.title}</Text>
                    <Text>Artist: {props.stuff.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={{ width: 400, height: 320, resizeMode: Image.resizeMode.cover }}
                    source={{ uri: props.stuff.image }}
                />
            </CardSection>

            <CardSection>
                <View style={btnStyle}>
                    <Button
                        onPress={() => { Linking.openURL(props.stuff.url) }}
                        title="Buy Now!"
                        color="#841584"
                    />
                </View>
            </CardSection>
        </Card>
    );
};

// Styles
const styles = {
    viewStyle: {
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderLeftWidth: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 2,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    artistStyle: {
        justifyContent: 'center',
        margin: 5,
    },
    profileStyle: {
        margin: 5,
        width: 50,
        height: 50,
        borderRadius: 200,
    },
    btnStyle: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        justifyContent: 'flex-end',
    }
};

// Export the component
export default StuffDetail;