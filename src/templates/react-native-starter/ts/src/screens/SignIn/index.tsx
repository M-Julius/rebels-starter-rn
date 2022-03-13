import React, { RefObject, useRef, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Input from '../../components/TextInput'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import images from '../../const/Images'
import { colour } from '../../styles'
// import PanoramaLogo from '../../assets/images/panorama_logo_normal.svg'
import PanoramaMainLogo from '../../assets/images/MainLogoPanorama.svg'
import { Actions } from 'react-native-router-flux'
import { useEffect } from 'react'

interface Props {
    
}

const SignIn = (props: Props) => {

    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [isSecure, setIsSecure] = useState<boolean>(true)
    const [inputPhoneNumber, setInputPhoneNumber] = useState<string>('')
    const [inputPassword, setInputPassword] = useState<string>('')

    useEffect(() => {
        if(inputPhoneNumber !== '' && inputPassword !== ''){
            setIsDisabled(false)
        } else {
            setIsDisabled(true)
        }
    }, [inputPhoneNumber, inputPassword])

    let phoneInput = useRef<TextInput>(null)
    let passwordInput = useRef<TextInput>(null)

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

    const setSecure = () => {
        setIsSecure(!isSecure)
    }

    const handleConfirmSignIn = () => {
        Actions.replace('main')
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{paddingTop: 10}} >
            
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
            <View style={styles.panoramaLogoContainer}>
                <PanoramaMainLogo width={240} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>
                    Get your trip personalized and start wandering the world with your friend
                </Text>
            </View>
            <View style={styles.form}>
                <View>
                    <Input 
                        label="Phone number" 
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
                        value={inputPhoneNumber}
                        onChangeText={setInputPhoneNumber}
                    />
                </View>
                <View>
                    <Input 
                        label="Password" 
                        placeholder="Enter your password" 
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
                        value={inputPassword}
                        onChangeText={setInputPassword}
                    />
                </View>
            </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.buttonWrapper}>
                        <TouchableOpacity 
                            style={[{backgroundColor: isDisabled ? colour.orangeDisable: colour.orangePanorama}, styles.buttonTouch]} 
                            disabled={isDisabled}
                            onPress={() => handleConfirmSignIn()}
                        >
                            {/* <Image source={images.icon_shield} /> */}
                            <Text style={styles.buttonTouchText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.forgotPassContainer}>
                    <TouchableOpacity onPress={() => Actions.forgotPassword()}>
                        <Text style={styles.forgotPassText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />

                <View style={styles.accountRegisterContainer}>
                    <Text style={styles.accountRegisterText}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => Actions.register()}>
                        <Text style={[styles.accountRegisterBtn, styles.accountRegisterText]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignIn