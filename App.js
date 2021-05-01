import React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, SingleStack } from './stacks';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function Liked() {
  return <Text>Liked Screen</Text>
}

function User() {
  return <Text>User Screen</Text>
}
function Settings() {
  return <Text>Settings Screen</Text>
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        style: {
          height: 100,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 10,

          elevation: 1,
        }
      }}>
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: () => <AntDesign name="home" size={40} color="#FF5D95" />,
          tabBarLabel: () => null,
        }} />
        <Tab.Screen name="Single" component={SingleStack} options={{
          tabBarIcon: () => <AntDesign name="folderopen" size={40} color="black" />,
          tabBarVisible: false,
          tabBarLabel: () => null
        }} />
        <Tab.Screen name="Liked" component={Liked} options={{
          tabBarIcon: () => <AntDesign name="hearto" size={40} color="black" />,
          tabBarLabel: () => null
        }} />
        <Tab.Screen name="User" component={User} options={{
          tabBarIcon: () => <AntDesign name="user" size={40} color="black" />,
          tabBarLabel: () => null
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          tabBarIcon: () => <AntDesign name="setting" size={40} color="black" />,
          tabBarLabel: () => null
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}