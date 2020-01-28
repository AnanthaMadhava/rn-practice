import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from'./components/ReusableComponent';
import LibraryList from './components/LibraryList';

const initialState = {};

const App = () => {
    return (
        <Provider store={createStore(reducers, initialState)}>
            <View  style={{ flex: 1 }}>
                <Header headerText="Text Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;