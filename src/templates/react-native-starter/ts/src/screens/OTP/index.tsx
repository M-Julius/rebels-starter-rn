import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Input from '../../components/TextInput'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'

interface OTPInterface {
    phoneNumber: string
}

const OTPScreen = (props: OTPInterface) => {
    const { phoneNumber } = props
    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{flex: 1}}
        >
            <View style={styles.container}>

                <View style={styles.topnav}>
                    <TouchableOpacity style={styles.backBtn}>
                        <Icon name={"arrow-back"} size={24} />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Verification Code</Text>
                    <Text style={styles.subTitleText}>Please type the verification code sent to</Text>
                    <Text style={styles.subTitleTextPhoneNumber}>08182731</Text>
                </View>
                <View style={styles.form}>
                        <TextInput style={styles.otpContainer} maxLength={1} keyboardType="number-pad" />
                        <TextInput style={styles.otpContainer} maxLength={1} keyboardType="number-pad" />
                        <TextInput style={styles.otpContainer} maxLength={1} keyboardType="number-pad" />
                        <TextInput style={styles.otpContainer} maxLength={1} keyboardType="number-pad" />
                </View>
                <View style={styles.bottomContainer}>
                    {/* <View style={styles.buttonWrapper}> */}
                        <View>
                            <Text style={styles.questionText}>Didn’t receive the code? </Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonTouch}>
                                <Text style={styles.buttonTouchText}>Resend new code</Text>
                            </TouchableOpacity>
                        </View>
                    {/* </View> */}
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default OTPScreen
