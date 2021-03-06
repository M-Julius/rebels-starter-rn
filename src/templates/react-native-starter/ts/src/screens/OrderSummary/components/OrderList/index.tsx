import React, { RefObject, useRef, useState } from 'react'
import { Modal, TextInput, View } from 'react-native'
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    ImageBackground,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../../../../components/TextInput'
import styles from './style'
import {colour} from '../../../../styles'
import { Actions } from 'react-native-router-flux'

interface Props {

}

const OrderList = (props: Props) => {

    interface ItineraryInterface {
        itineraryList: Array<string>
    }

    const TRIPS = [
        "trip 1",
        "trip 2",
        "trip 3"
    ]

    return (
        <SafeAreaView
            style={{flex:1, backgroundColor: colour.white}}
        >
            <View style={styles.topnav}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={()=> Actions.pop()}
                >
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.screenHeaderContainer}>
                <Text style={styles.screenTitle}>My order</Text>
            </View>
            <View
                style={{flex:1}}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={styles.customCardContainer}
                >
                    {   [1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => {
                        return (
                            <Animated.View style={[styles.customCard]}>
                                <TouchableOpacity key={i} onPress={()=> Actions.push('summary', el)}>
                                    <View
                                        style={styles.cardContainer}
                                    >
                                        <Text style={styles.tripName} >Trip to Bali</Text>
                                        <Text style={styles.tripCode} >#P412312 ??? 2 orders</Text>
                                        <View style={styles.tripSummary}>
                                            <Text style={styles.tripStatus} >Waiting for payment 00:19:12</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>
                        )
                    })

                    }
                </ScrollView>
            </View>

        </SafeAreaView>

    )
}

export default OrderList
