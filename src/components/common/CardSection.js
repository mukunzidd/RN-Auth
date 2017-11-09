// import for making a component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// make a component
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
};

// Styles
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        elevation: 1,
    }
};

// make the component available to the other partsss of the app
export { CardSection };