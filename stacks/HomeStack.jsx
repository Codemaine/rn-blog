import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Fontisto, AntDesign, Feather } from '@expo/vector-icons';
import Home from "../screens/Home"
import Single from "../screens/Single"
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';


export function HomeStack() {
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

  export function SingleStack() {
    const Stack = createStackNavigator();
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Single" component={Single} options={{
                headerStyle: { height: 150 },
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    <AntDesign name="left" size={45} color="black" />
                    <Text style={{ fontSize: 25 }}>Beauty</Text>
                </TouchableOpacity>,
                headerTransparent: true,
                headerTitle: () => null,
                headerRight: () => <View style={{ display: "flex", flexDirection: "row", width: 112, justifyContent: "space-between", marginHorizontal: 10 }}>
                    <Feather name="headphones" size={24} color="#556678" />
                    <AntDesign name="hearto" size={24} color="#556678" />
                    <AntDesign name="sharealt" size={24} color="#556678" />
                </View>
            }} />
        </Stack.Navigator>
    )
}