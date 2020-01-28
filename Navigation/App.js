import React from 'react';
import { StyleSheet, Text, View, Button, Easing } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button 
        title="Save" 
        onPress={() => {
          navigation.replace('Home')
        }} 
      />
    )
  })
  
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title="Go To Details Screen" onPress={() => navigation.navigate('Details')} />
    </View>
  )
}

const SettingsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={styles.container}>
      <Text style={{ color: isFocused ? 'green': 'black' }}>SettingsScreen</Text>
    </View>
  )
}

const FeedScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
    </View>
  )
}

const DetailScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>DetailScreen</Text>
    </View>
  )
}

const HomeStackNavigator = ({ navigation, route }) => {
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }
  return(
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailScreen} />
    </HomeStack.Navigator>
  )
}

const HomeTabNavigator = ({ navigation, route }) => {
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  return(
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName
        if(route.name === 'Home') {
          iconName = 'ios-home'
        } else if(route.name === 'Feed') {
          iconName = 'logo-rss'
        } else if(route.name === 'Setting') {
          iconName = 'ios-settings'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      }
    })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Setting" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear
  }
}

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Home';

  switch(routeName) {
    case 'Home':
      return false
  }
}

function shouldHeaderBeShowm(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'Home';

  switch(routeName) {
    case 'Home':
      return 'Home'
    case 'Feed':
      return 'Feed'
    case 'Settings':
      return 'Settings'
  }
}

export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          // ...TransitionPresets.FadeFromBottomAndroid,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: closeConfig
          }
        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen 
          options={({route})=>({
            title: getHeaderTitle(route),
            headerShown: shouldHeaderBeShowm(route)
          })}
          name="Home" 
          component={HomeTabNavigator} 
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
