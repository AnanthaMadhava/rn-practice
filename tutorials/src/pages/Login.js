import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Logo />
                <Form type="Login" />
                <View style={styles.signUpTextCont}>
                    <Text style={styles.signUpText}>Don't have an account yet?</Text>
                    <Text style={styles.signUpButton}> Signup</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signUpTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row',
    },
    signUpText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signUpButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    }
})