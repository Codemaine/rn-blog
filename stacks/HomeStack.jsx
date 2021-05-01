import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Fontisto } from '@expo/vector-icons';
import Home from "../screens/Home"

export default function HomeStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            headerLeft: () => (<Fontisto name="nav-icon-grid-a" size={30} style={{ marginLeft: 15 }} color="black" />),
            headerStyle: { height: 120 },
            headerTitleStyle: { fontSize: 25 },
            headerRight: () => (<Fontisto name="search" size={30} style={{ marginRight: 15 }} color="black" />),
            title: "Discover"
                      }} />
        </Stack.Navigator>
    );
  }