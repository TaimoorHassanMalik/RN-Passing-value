import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SecondPage extends Component {
    static navigationOptions = {
        title: 'Second Page',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text> Hi Taimoor </Text>

                <Text style={styles.TextStyle}>
                    {this.props.navigation.state.params.JSON_ListView_Clicked_Item
                        ? this.props.navigation.state.params.JSON_ListView_Clicked_Item
                        : 'No Value Passed'}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: 23,
        textAlign: 'center',
        color: '#f00',
    },
});