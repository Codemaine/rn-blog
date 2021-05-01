import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView, FlatList } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import Post from '../components/Post';
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.jpeg'
import blog3 from '../assets/blog3.jpeg'
import blog4 from '../assets/blog4.jpeg'

export default function Home() {
    const data = [
        {
            imgUrl: blog1,
            accentColor: "#FFB1C9",
            title: "Does Dry is January Actually Improve Your Health?",
            avatar: "Subash Chandra",
            readTime: "4 min read"
        },
        {
            imgUrl: blog2,
            accentColor: "#FFDCE3",
            title: "How to Seem Like You Always Have Your Shot Together",
            avatar: "Jonhy Vino",
            readTime: "4 min read"
        },
        {
            imgUrl: blog3,
            accentColor: "#EDE8EC",
            title: "Does Dry January Actually Improve Your Health?",
            avatar: "Masudur Rah...",
            readTime: "4 min read"
        },
        {
            imgUrl: blog4,
            accentColor: "#FFE8E2",
            title: "You do hire a designer to make something. You hire them.",
            avatar: "Subash Chandra",
            readTime: "4 min read"
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList 
            data={data}
            renderItem={(data) => <Post data={data.item} />}
            keyExtractor={item => item.index}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})