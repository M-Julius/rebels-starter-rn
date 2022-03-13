import React from 'react'
import { Animated, Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

interface ItineraryInterface {
    itineraryList: Array<string>
}

const Itinerary = (props: ItineraryInterface) => {
    const { itineraryList } = props
    return (
        <>
            <Text style={styles.titleUpcoming}>Upcoming Trips</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                style={styles.customCardContainer}
                snapToInterval={Dimensions.get("window").width * 0.85}
                snapToAlignment="center"
                indicatorStyle="black"
                pagingEnabled
                decelerationRate={0}
            >
                {
                    itineraryList.map((trip, i) => (
                        <Animated.View style={[styles.customCard]}>
                            <TouchableOpacity>
                                <ImageBackground 
                                    style={styles.imageBg} 
                                    source={{uri: "https://pix10.agoda.net/geo/city/17193/1_17193_02.jpg?s=1920x822"}} 
                                >
                                    <View style={styles.tripSummary}>
                                        <Text style={styles.tripName} >Slide me...</Text>
                                        <Text style={styles.tripDate}>25 Jul - 31 Jul 2021 • 5 members</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </Animated.View>
                    ))
                }
            </ScrollView>
        </>
    )
}

export default Itinerary
