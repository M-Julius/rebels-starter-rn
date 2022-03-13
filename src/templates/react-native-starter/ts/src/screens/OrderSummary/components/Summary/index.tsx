import React, { useState } from 'react'
import { View } from 'react-native'
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'
import {colour} from '../../../../styles'
import Car from '../../../../assets/images/Car.svg'
import Help from '../../../../assets/images/Help.svg'
import Shield from '../../../../assets/images/shield.svg'
import { Actions } from 'react-native-router-flux'

interface Props {

}

interface ItineraryInterface {
    itineraryList: Array<string>
}

const Summary = (props: Props) => {
    
    const [isDisabled, setIsDisabled] = useState(true)

    const TRIPS = [
        "trip 1",
        "trip 2",
        "trip 3"
    ]
    const tempArr = [
        1,
        2,
        3,
        4,
        5,
        6
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
                <TouchableOpacity>
                    <Help/>
                </TouchableOpacity>
            </View>
            <View style={styles.screenHeaderContainer}>
                <Text style={styles.screenTitle}>My order</Text>
                <Text style={styles.description}>#P412312</Text>
            </View>
            <View style={styles.orderTitle}>
                <Text style={styles.orderHead}>Trip to Bali</Text>
                <Text style={styles.orderSub}>
                    <Text >Changed to </Text>
                    <Text style={styles.orderBold}>John Doe</Text>
                </Text>
            </View>
            {/* <View style={styles.form}>
                <Text style={styles.screenTitle}>My order</Text>

            </View> */}
            <View
                // style={styles.viewContainer}
                style={{flex:1}}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={styles.customCardContainer}
                >
                    {   tempArr.map((temp, i) => {
                        return (
                            <>
                                <Animated.View style={[styles.customCard]}>
                                    <TouchableOpacity>
                                        <View
                                            style={styles.cardContainer}
                                        >
                                            <View style={styles.contentLeft}>
                                                <View
                                                    style={styles.contentLeftImage}
                                                >
                                                    <Car
                                                    />
                                                </View>
                                                <View>
                                                    <Text style={styles.tripName} >Jakarta - Bali</Text>
                                                    <Text style={styles.tripCode} >Citilink • Sat 26 Jul 2021</Text>
                                                    <Text style={styles.tripCode} >04.10 - 05.40</Text>
                                                </View>
                                            </View>
                                            <Text style={styles.tripPrice} >Rp600.000</Text>
                                        </View>
                                    </TouchableOpacity>
                                </Animated.View>
                                <View
                                    style={ i === tempArr.length - 1 ? styles.noBorderLine : styles.borderLine}
                                >
                                </View>
                            </>
                        )
                    })

                    }


                </ScrollView>


                <View
                    style={{height:8,backgroundColor: colour.greyBg}}
                >

                </View>
                <View style={styles.contentBottom}>
                    <View style={styles.contentTextBottom}>
                        <Text style={styles.textBottomLeft} >Order total </Text>
                        <Text style={styles.textBottomRight} >Rp3.100.000</Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity
                            style={[{backgroundColor: isDisabled ? colour.orangeDisable: colour.orangePanorama}, styles.buttonTouch]}
                            disabled={isDisabled}
                            onPress={()=> Actions.push('paymentMethod')}
                        >
                            <Shield style={styles.contentImageBtn} />
                            <Text style={styles.buttonTouchText}>Continue to payment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={styles.upcomingTripContainer}>
                <Itinerary itineraryList={TRIPS} />
            </View> */}

        </SafeAreaView>

    )
}

export default Summary
