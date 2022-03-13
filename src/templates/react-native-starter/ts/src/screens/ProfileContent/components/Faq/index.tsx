import React, { RefObject, useRef, useState } from 'react'
import { Modal, TextInput, View, Image } from 'react-native'
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
import images from '../../../../const/Images'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Bank1 from '../../../../assets/Bank_Central_Asia.svg'
import RightArrow from '../../../../assets/images/Right_arrow.svg'
import { Actions } from 'react-native-router-flux'

interface Props {

}

const Faq = (props: Props) => {
    const [isDisabled, setIsDisabled] = useState(true)

    interface ItineraryInterface {
        itineraryList: Array<string>
    }

    const TRIPS = [
        "trip 1",
        "trip 2",
        "trip 3"
    ]
    const tempArr = [
        {
            name: 'BCA Virtual Account',
            img: images.bank1
        },
        {
            name: 'Mandiri Virtual Account',
            img: images.bank2
        },
        {
            name: 'BNI Virtual Account',
            img: images.bank3
        },
        {
            name: 'BRIVA',
            img: images.bank4
        },
    ]
    const tempArr2 = [
        {
            name: 'BCA',
            img: images.bank1
        },
        {
            name: 'Mandiri',
            img: images.bank2
        },
        {
            name: 'BNI',
            img: images.bank3
        },
    ]
    const tempArr3 = [
        {
            name: 'GoPay',
            img: images.bank5
        },
        {
            name: 'BCA KlikPay',
            img: images.bank6
        },
        {
            name: 'ShopeePay',
            img: images.bank7
        },
        {
            name: 'LinkAja',
            img: images.bank8
        },
        {
            name: 'OVO',
            img: images.bank9
        },
    ]
    const tempArr4 = [
        {
            name: 'ATM',
            img: images.bank10,
            img2: images.bank11,
            img3: images.bank12
        },
    ]

    const BankCard = (props: any) => {
        const {i, tempArr, el, isAtm} = props
        return (
            <>
                <Animated.View style={[styles.customCard]}>
                    <TouchableOpacity
                        key={i}
                        onPress={()=> Actions.push('detail', el)}
                    >
                        <View
                            style={styles.cardContainer}
                        >

                            <Text style={styles.tripName} >{el.name}</Text>

                            <View
                                style={styles.contentRightImage}
                            >
                                { isAtm
                                    ?
                                    (
                                        <View style={{marginHorizontal: 8, flexDirection: 'row'}} >
                                            <Image style={styles.imgAtm}  source={el.img}
                                            />
                                            <Image style={styles.imgAtm} source={el.img2}
                                            />
                                            <Image style={styles.imgAtm} source={el.img3}
                                            />
                                        </View>
                                    )
                                    :
                                    (
                                        <Image  source={el.img}
                                />
                                    )
                                }

                                <RightArrow style={isAtm ? {marginLeft: 0} : {marginLeft: 8}}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
                <View
                    style={ i === tempArr.length - 1  ? styles.noBorderLine : styles.borderLine}
                >
                </View>
            </>
        )
    }



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
                <Text style={styles.screenTitle}>Payment methods</Text>
            </View>
            <View
                // style={styles.viewContainer}
                style={{flex:1}}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    contentContainerStyle={styles.customCardContainer}
                    // style={styles.customCardContainer}
                    // snapToInterval={Dimensions.get("window").width * 0.85}
                    // snapToAlignment="center"
                    // indicatorStyle="black"
                    // pagingEnabled
                    // decelerationRate={0}
                >

                    <View style={styles.orderTitle}>
                        <Text style={styles.orderHead}>Virtual account</Text>
                        <Text style={styles.orderSub}>Pay by transferring via atm, internet banking, and mobile banking. </Text>
                    </View>
                    {   tempArr.map((temp, i) => {
                        return (
                            <BankCard el={temp} i = {i} tempArr={tempArr}/>
                        )
                    })

                    }

                    <View style={styles.orderTitle}>
                        <Text style={styles.orderHead}>Bank Transfer</Text>
                        <Text style={styles.orderSub}>Pay by transferring via atm, internet banking, and mobile banking. </Text>
                    </View>
                    {   tempArr2.map((temp, i) => {
                        return (
                            <BankCard el={temp} i = {i} tempArr={tempArr2}/>
                            )
                        })
                    }


                    <View style={styles.orderTitle}>
                        <Text style={styles.orderHead}>Instant Payment</Text>
                    </View>
                    {   tempArr3.map((temp, i) => {
                        return (
                            <BankCard el={temp} i = {i} tempArr={tempArr3}/>
                            )
                        })
                    }

                    <View style={styles.orderTitle}>
                        <Text style={styles.orderHead}>ATM</Text>
                    </View>
                    {   tempArr4.map((temp, i) => {
                        return (
                            <BankCard el={temp} i = {i} tempArr={tempArr3} isAtm={true}/>
                            )
                        })
                    }
                </ScrollView>
            </View>

        </SafeAreaView>

    )
}

export default Faq
