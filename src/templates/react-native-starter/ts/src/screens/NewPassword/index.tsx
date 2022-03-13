import React, { RefObject, useRef, useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../../components/TextInput'
import { colour } from '../../styles'
import styles from './style'

interface Props {
    
}

const NewPassword = (props: Props) => {

    const [isSecure, setIsSecure] = useState(true)
    const [confirmPassIsSecure, setconfirmPassIsSecure] = useState(true)
    const [isDisabled, setIsDisabled] = useState(true)

    let passwordInput = useRef<TextInput>(null)
    let confirmPasswordInput = useRef<TextInput>(null)

    const setSecure = () => {
        setIsSecure(!isSecure)
    }

    const setConfirmPassSecure = () => {
        setconfirmPassIsSecure(!confirmPassIsSecure)
    }

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
                <TouchableOpacity style={styles.backBtn}>
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.screenTitlteContainer}>
                <Text style={styles.screenTitle}>Forgot pass</Text>
                <Text style={styles.screenDescription}>Please enter your new password</Text>
            </View>
            <View style={styles.inputContainer} >
                <Input 
                    label="New password" 
                    placeholder="Enter your new password" 
                    isPassword={isSecure} 
                    labelStyle={styles.inputLabel}
                    boxStyle={styles.boxStyle}
                    wrapperStyle={styles.wrapperInput}
                    onFocus={() => onFocusedTextInput(passwordInput)}
                    onBlur={() => onBlurredTextInput(passwordInput)}
                    ref={passwordInput}
                    icon={true}
                    setIsSecure={setSecure}
                    leftIcon={false}
                    leftIconName=""
                />
            {/* </View>
            <View> */}
                <Input 
                    label="Retype new password" 
                    placeholder="Retype your new password" 
                    isPassword={confirmPassIsSecure} 
                    labelStyle={styles.inputLabel}
                    boxStyle={styles.boxStyle}
                    wrapperStyle={styles.wrapperInput}
                    onFocus={() => onFocusedTextInput(confirmPasswordInput)}
                    onBlur={() => onBlurredTextInput(confirmPasswordInput)}
                    ref={confirmPasswordInput}
                    icon={true}
                    setIsSecure={setConfirmPassSecure}
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
                        <Text style={styles.buttonTouchText}>Save new password</Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
        </SafeAreaView>
    )
}

export default NewPassword
