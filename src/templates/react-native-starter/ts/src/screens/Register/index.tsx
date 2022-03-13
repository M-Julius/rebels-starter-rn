import React, { RefObject, useRef, useState } from 'react'
import { 
    KeyboardAvoidingView, 
    Platform, 
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    SafeAreaView 
} from 'react-native'
import Input from '../../components/TextInput'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { colour } from '../../styles'
import { Actions } from 'react-native-router-flux'


interface Props {
    
}

const Register = (props: Props) => {

    const [isDisabled, setIsDisabled] = useState(true)


    let nameInput = useRef<TextInput>(null)
    let usernameInput = useRef<TextInput>(null)
    let phoneInput = useRef<TextInput>(null)
    let passwordInput = useRef<TextInput>(null)
    let emailInput = useRef<TextInput>(null)
    let confirmPasswordInput = useRef<TextInput>(null)

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

    const Form = () => {
        return (
            <View style={styles.form}>
                <View>
                    <Input 
                        label="Name" 
                        placeholder="Enter your name..." 
                        isPassword={false} 
                        labelStyle={styles.inputLabel}
                        boxStyle={styles.boxStyle}
                        wrapperStyle={styles.wrapperInput}
                        onFocus={() => onFocusedTextInput(nameInput)}
                        onBlur={() => onBlurredTextInput(nameInput)}
                        ref={nameInput}
                        leftIcon={false}
                        leftIconName=""
                    />
                </View>
                <View>
                    <Input 
                        label="Username" 
                        placeholder="Enter your name..." 
                        isPassword={false} 
                        labelStyle={styles.inputLabel}
                        boxStyle={styles.boxStyle}
                        wrapperStyle={styles.wrapperInput}
                        onFocus={() => onFocusedTextInput(usernameInput)}
                        onBlur={() => onBlurredTextInput(usernameInput)}
                        ref={usernameInput}
                        leftIcon={false}
                        leftIconName=""
                    />
                </View>
                <View>
                    <Input 
                        label="Phone" 
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
                <View>
                    <Input 
                        label="Email" 
                        placeholder="name@mail.com" 
                        isPassword={false} 
                        labelStyle={styles.inputLabel}
                        boxStyle={styles.boxStyle}
                        wrapperStyle={styles.wrapperInput}
                        onFocus={() => onFocusedTextInput(emailInput)}
                        onBlur={() => onBlurredTextInput(emailInput)}
                        ref={emailInput}
                        leftIcon={false}
                        leftIconName=""
                    />
                </View>
                <View>
                    <Input 
                        label="Password" 
                        placeholder="Enter your password" 
                        isPassword={true} 
                        labelStyle={styles.inputLabel}
                        boxStyle={styles.boxStyle}
                        wrapperStyle={styles.wrapperInput}
                        onFocus={() => onFocusedTextInput(passwordInput)}
                        onBlur={() => onBlurredTextInput(passwordInput)}
                        ref={passwordInput}
                        leftIcon={false}
                        leftIconName=""
                    />
                </View>
                <View>
                    <Input 
                        label="Re-type Password" 
                        placeholder="Re-type your password" 
                        isPassword={true} 
                        labelStyle={styles.inputLabel}
                        boxStyle={styles.boxStyle}
                        wrapperStyle={styles.wrapperInput}
                        onFocus={() => onFocusedTextInput(confirmPasswordInput)}
                        onBlur={() => onBlurredTextInput(confirmPasswordInput)}
                        ref={confirmPasswordInput}
                        leftIcon={false}
                        leftIconName=""
                    />
                </View>
            </View>
            
        )
    }

    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{paddingTop: 10}} >
        <ScrollView 
            showsVerticalScrollIndicator={false}
            bounces={false}
        >
            <View style={styles.topnav}>
                <TouchableOpacity style={styles.backBtn} onPress={() => Actions.pop()}>
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Let's Get Started</Text>
                <Text style={styles.subTitleText}>With Panorama you can get your personalized trip with an assist from our travel experts</Text>
            </View>
                {
                    <Form />
                }
            <View style={styles.bottomContainer}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity 
                        style={[{backgroundColor: isDisabled ? colour.orangeDisable: colour.orangePanorama}, styles.buttonTouch]} 
                        disabled={isDisabled}
                    >
                        <Text style={styles.buttonTouchText}>Create your account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textAgreementWrapper}>
                    <View>
                        <Text style={styles.textAgreement}>
                            By tapping Create your account, you agree to our
                        </Text>
                    </View>
                    <View style={styles.textAgreementButtonContainer}>
                        <TouchableOpacity>
                            <Text style={styles.termsAndCondition}>Terms and Conditions</Text>
                        </TouchableOpacity>
                        <Text style={styles.textAgreement}> and </Text>
                        <TouchableOpacity>
                            <Text style={styles.privacyStatement}>Privacy Statements</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Register
