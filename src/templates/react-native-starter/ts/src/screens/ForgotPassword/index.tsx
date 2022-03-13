import React, { RefObject, useRef, useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../../components/TextInput'
import { colour } from '../../styles'
import styles from './style'

interface Props {
    
}

const ForgotPassword = (props: Props) => {

    const [isDisabled, setIsDisabled] = useState(true)

    let phoneInput = useRef<TextInput>(null)

    const onFocusedTextInput = (refObject: RefObject<TextInput>) => {
        refObject.current?.setNativeProps({
            style: styles.textInputFocus
        })
    }

    const onBlurredTextInput = (refObject: RefObject<TextInput>) => {
        refObject.current?.setNativeProps({
            style: styles.textInputBlur
        })
    }

    return (
        <SafeAreaView>
            <View style={styles.topnav}>
                <TouchableOpacity style={styles.backBtn} onPress={() => Actions.pop()}>
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.screenTitlteContainer}>
                <Text style={styles.screenTitle}>Forgot pass</Text>
                <Text style={styles.screenDescription}>Please enter phone number or email you use to sign in to Panorama</Text>
            </View>

            <View style={styles.inputContainer}>
                <Input 
                    label="Phone number / email" 
                    placeholder="08312093xxx" 
                    isPassword={false} 
                    labelStyle={styles.inputLabel}
                    boxStyle={styles.boxStyle}
                    wrapperStyle={styles.wrapperInput}
                    onFocus={() => onFocusedTextInput(phoneInput)}
                    onBlur={() => onBlurredTextInput(phoneInput)}
                    ref={phoneInput}
                    leftIcon={false}
                    leftIconName=""
                />
            </View>
            <View style={styles.bottomContainer}>
                {/* <View style={styles.buttonWrapper}> */}
                    <TouchableOpacity 
                        style={[{backgroundColor: isDisabled ? colour.orangeDisable: colour.orangePanorama}, styles.buttonTouch]} 
                        disabled={isDisabled}
                    >
                        <Text style={styles.buttonTouchText}>Request password reset</Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword
