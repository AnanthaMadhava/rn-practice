import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

const firebaseConfig = {
    apiKey: "AIzaSyCT1VhH_yDUNPPJKO8ZF5x6Y1Kk-euvdyk",
    authDomain: "manager-a3890.firebaseapp.com",
    databaseURL: "https://manager-a3890.firebaseio.com",
    projectId: "manager-a3890",
    storageBucket: "manager-a3890.appspot.com",
    messagingSenderId: "421616703818",
    appId: "1:421616703818:web:22ff6424715eecb7f409b3",
    measurementId: "G-YPEW1YYVKS"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;