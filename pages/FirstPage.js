import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default class FirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }
    static navigationOptions = {
        title: 'First Page',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>

                <TextInput
                    value={this.state.username}
                    onChangeText={username => this.setState({ username })}
                    placeholder={'Enter Any value'}
                    style={styles.input}
                />

                <Button
                    title="Go Next"
                    onPress={() =>
                        navigate('SecondPage', {
                            JSON_ListView_Clicked_Item: this.state.username,
                        })
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center',
        padding: 16,
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#DBDBD6',
    },
});