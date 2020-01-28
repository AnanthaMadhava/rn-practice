import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor="#1c313a" 
          barStyle="light-content" 
        />
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;