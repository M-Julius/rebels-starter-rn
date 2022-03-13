import React, { useState } from 'react'
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    Clipboard //Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from @react-native-community/clipboard instead of 'react-native'.
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'
import {colour} from '../../../../styles'
import Bank1 from '../../../../assets/images/Bank_Central_Asia.svg'
import { Actions } from 'react-native-router-flux'
interface DetailProps {

}

interface ButtonCompoInterface {
    text: string, 
    isDisabled: boolean, 
    isChangePay?: boolean,
    path: string
}

const Detail = (props: DetailProps) => {
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    const NumberCard = (props : any) => {
        const { num } = props
        return (
            <View
                style={styles.infoCopy}
            >
                        <Text style={[styles.nominalAccount]}>{num}</Text>
                        <TouchableOpacity
                            onPress={() => Clipboard.setString(num)}
                        >
                            <View
                                style={[styles.btnCopy]}
                            >
                                <Text style={[styles.xs, styles.orange, styles.bold]}>Copy</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
        )
    }

    const BtnCompo = (props: ButtonCompoInterface) => {
        const {text, isDisabled, isChangePay, path} = props
        return (
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    onPress={()=> Actions.push(path)}
                    style={
                        [
                            {
                                backgroundColor: isDisabled
                                    ? colour.orangeDisable
                                    : isChangePay
                                        ? colour.white
                                        : colour.orangePanorama
                            },
                            styles.buttonTouch,
                            isChangePay
                                ? styles.btnChange
                                : undefined
                        ]
                    }
                    disabled={isDisabled}
                >
                    <Text
                        style={
                            [
                                styles.buttonTouchText,
                                isChangePay
                                    ? styles.orange
                                    : undefined
                            ]
                        }
                    >
                        {text}
                    </Text>
                </TouchableOpacity>
            </View>
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
                <Text style={styles.screenTitle}>Complete payment within 00:29:39</Text>
            </View>

            <View
                style={styles.contentContainer}
            >
                <Text style={styles.bankName}>BCA Virtual Account</Text>
                <Text style={styles.orderSub}>
                    Order ID
                    <Text style={styles.orderBold}>
                        {' #P412312'}
                    </Text>
                </Text>

                <View
                    style={styles.nominalContainer}
                >
                    <Text style={styles.m}>Please transfer to</Text>
                    <View style={styles.infoBankContainer}>
                        <Bank1 style={[styles.imgCustom, styles.m16]} />
                        <View>
                            <Text style={[styles.xs,]}>BCA Virtual Account</Text>
                            <Text style={[styles.m, styles.bold]}>PT Panorama Sentrawisata</Text>
                        </View>
                    </View>
                    <NumberCard
                        num={'8123124911'}
                    />
                    <Text style={[styles.m, styles.padTotal]}>Total transfer amount</Text>
                    <NumberCard
                        num={'Rp3.100.000'}
                    />
                </View>

                <BtnCompo
                    text={'Change payment method'}
                    isDisabled={isDisabled}
                    isChangePay={true}
                    path={'paymentMethod'}
                />
                <BtnCompo
                    text={'See order list'}
                    isDisabled={isDisabled}
                    path={'orderList'}
                />
            </View>

        </SafeAreaView>

    )
}

export default Detail
