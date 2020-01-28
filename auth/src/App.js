import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/ReusableComponent';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

const firebaseConfig = {
    apiKey: "AIzaSyAfIlcyCX3dsbWsYnGM_RMhYp_m7VyG1AU",
    authDomain: "authentication-13155.firebaseapp.com",
    databaseURL: "https://authentication-13155.firebaseio.com",
    projectId: "authentication-13155",
    storageBucket: "authentication-13155.appspot.com",
    messagingSenderId: "268385651093",
    appId: "1:268385651093:web:7981309da74f3c80488e9c",
    measurementId: "G-2QSCRS3ZC0"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

class App extends Component {

    state = { loggedIn: null }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })
    }
    
    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default: 
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View>
        );
    }
}

export default App;