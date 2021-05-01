import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Post(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.postContainer}>
        <View style={styles.lines}>
            <View style={[styles.hLine, {backgroundColor: props.data.accentColor}]}></View>
            <View style={[styles.vLine, {backgroundColor: props.data.accentColor}]}></View>
        </View>
        <View style={styles.mainPost}>
            <Image style={styles.postImage} source={props.data.imgUrl} />
            <View style={styles.postDetails}>
                <TouchableOpacity onPress={() => navigation.navigate('Single', {
                    data: props.data
                })}>
                <Text style={styles.postTitle}>{props.data.title}</Text>
                </TouchableOpacity>
                <View style={styles.postFooter}>
                    <View style={styles.postAvatar}>
                        <Image source={require('../assets/user.png')} style={{ width: 40, height: 40 }} />
                        <Text style={styles.postAvatarName}>{props.data.avatar}</Text>
                    </View>
                    <View>
                    </View>
                    <Text style={styles.time}>   •   {props.data.readTime}</Text>
                </View>
            </View>
        </View>

    </View>

    )
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 20
    },
    lines: {
        position: "absolute"
    },
    vLine: {
        height: 90,
        width: 10,
    },
    hLine: {
        height: 10,
        width: 90,
    },
    mainPost: {
        display: "flex",
        flexDirection: "row",
        margin: 15
    },
    postImage: {
        width: 120,
        height: 130
    },
    postDetails: {
        display: "flex",
        marginHorizontal: 20,
        width: 200,
        justifyContent: "space-between"
    },
    postFooter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
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
        color: "#A7B2BA",
        display: "flex",
        flexDirection: "column"
    }
})