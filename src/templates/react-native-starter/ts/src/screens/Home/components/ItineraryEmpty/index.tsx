import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

interface Props {
    
}

const ItineraryEmpty = (props: Props) => {
    return (
        <View style={styles.customCard}>
            <ImageBackground style={styles.imageBackground} source={{uri: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/18/c8/b7.jpg"}}>
                <View style={styles.imageContentStyle}>
                    <Text style={styles.title}>Aww.. you have no itinerary created :(</Text>
                    <Text style={styles.subTitle}>Create new itinerary and get help from our travel experts</Text>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>Create new travel plan</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default ItineraryEmpty
