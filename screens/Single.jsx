import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

export default function Single({ route }) {
    console.log(route)
    return (
        <ScrollView>
            <View style={{ position: 'absolute' }}>
                <View style={[styles.hLine, ]}></View>
                <View style={[styles.vLine, ]}></View>
            </View>
            <View style={{ position: "relative", display: "flex", width: 380, marginTop: 160, 
        marginLeft: 30 }}>
            <Image source={require('../assets/blog1.png')} style={styles.image} />
            <Text style={styles.title}></Text>
            <View style={styles.postFooter}>
                    <View style={styles.postAvatar}>
                        <Image source={require('../assets/user.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.postAvatarName}>Jermaine Antwi</Text>
                    </View>
                    <View>
                    </View>
                    <Text style={styles.time}>   •   4 min read</Text>
                </View>
                <View style={styles.PostContainer}>
                    <Text style={styles.PostText}>
                    Two Arkansas firemen, Vince and Don, get hold of a map that leads to a cache of stolen gold in an abandoned factory in East St. Louis. What they don't know is that the factory is in the turf of a local gang, who come by to execute one of their enemies. Vince sees the shooting, the gang spots Vince, and extended mayhem ensues. As Vince and Don try to escape, gang leader King James argues with his subordinate Savon about how to get rid of the trespassers.
                    Two Arkansas firemen, Vince and Don, get hold of a map that leads to a cache of stolen gold in an abandoned factory in East St. Louis. What they don't know is that the factory is in the turf of a local gang, who come by to execute one of their enemies. 
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    vLine: {
        height: 140,
        width: 20
    },
    hLine: {
        height: 150,
        width: 250
    },
    image: { 
        height: 300, 
        width: 380,
    },
    title: {
        fontSize: 24,
        paddingTop: 5,
        paddingBottom: 10
    },
    postFooter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        
    },
    postTitle: {
        fontSize: 21,
        fontWeight: "700"
    },
    postAvatar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    time: {
        marginHorizontal: 15,
        color: "#A7B2BA",
        display: "flex",
        flexDirection: "column"
    },
    PostContainer: {
        marginTop: 25
    },
    PostText: {
        fontSize: 17
    }
})

