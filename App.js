import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation/stack';
import {NavigationContainer } from 'react-navigation/native';
import {webView} from 'react-native-webview'
import HomeScreen from './screens/HomeScreen';
import StarMap from './screens/StarMap';
import SpaceCrafts from './screens/SpaceCrafts';
import DailyPics from './screens/DailyPics';

const Stack = createStackNavigator();

export default function App() {
  
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" Component={HomeScreen} />
            <Stack.Screen name="DailyPics" Component={DailyPics} />
            <Stack.Screen name="SpaceCrafts" Component={SpaceCrafts} />
            <Stack.Screen name="StarMap" Component={StarMap} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
