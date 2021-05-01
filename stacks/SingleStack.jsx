import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Single from '../screens/Single';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function SingleStack() {
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
