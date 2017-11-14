// import for making a component
import React from 'react';
import { StyleSheet, View } from 'react-native';

// make a component
const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
};

// Styles
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'purple',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 100,
        padding: 20,
        justifyContent: 'center'
    }
};

// make the component available to the other partsss of the app
export { Card };

