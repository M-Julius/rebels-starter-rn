import React, { RefObject, useRef, useState } from 'react'
import { Modal, TextInput, View, Image } from 'react-native'
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    ImageBackground,
    Dimensions,
    Platform,
    KeyboardAvoidingView,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../../../../components/TextInput'
import styles from './style'
import {colour} from '../../../../styles'
import images from '../../../../const/Images'
import Bank1 from '../../../../assets/images/Bank_Central_Asia.svg'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Actions } from 'react-native-router-flux'
import Profile from '../../../../assets/images/Profile.svg'
import {Clipboard} from 'react-native';
const { width, height } = Dimensions.get('window');

interface Props {

}


const Account = (props: Props) => {
    let nameInput = useRef<TextInput>(null)
    let usernameInput = useRef<TextInput>(null)
    let emailInput = useRef<TextInput>(null)
    let tripMember = useRef<TextInput>(null)

    const [isDisabled, setIsDisabled] = useState(false)
    const [name, setName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')


    const onFocusedTextInput = (refObject: RefObject<TextInput>, refKey?: string) => {
        refObject.current?.setNativeProps({
            style: styles.textInputFocus
        })
    }

    const onBlurredTextInput = (refObject: RefObject<TextInput>) => {
        refObject.current?.setNativeProps({
            style: styles.textInputBlur
        })
    }

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

    const BtnCompo = (props : any) => {
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
                                : ''
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
                                    : ''
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
             <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.topnav}>
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={()=> Actions.pop()}
                        >
                            <Icon name={"arrow-back"} size={24} />
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        >
                            <Text style={[styles.backText, styles.boldOrange]}>Save</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={styles.contentContainer}
                    >
                        <Text style={styles.bankName}>My account</Text>
                        <View
                            style={
                                {
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    marginTop: 48,
                                    marginBottom: 32
                                }
                            }
                        >
                            <TouchableOpacity
                            >
                                <View
                                    style={
                                        {
                                            backgroundColor: colour.greyBg,
                                            height: 120,
                                            width: 120,
                                            borderRadius: 120/2,
                                            alignItems: 'center',
                                            overflow: 'hidden'
                                        }
                                    }
                                >
                                    <View
                                        style={{
                                            height: '70%',
                                            justifyContent: 'center',
                                            paddingTop: 5
                                        }}
                                    >
                                        <Profile></Profile>
                                    </View>
                                    <View
                                        style={{
                                            height: '30%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: colour.orangePanorama,
                                            width: width,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: colour.white,
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: 12,
                                                lineHeight: 18,
                                                paddingBottom: 5
                                            }}
                                        >
                                            Add photo
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View >
                            <Input
                                label="Name"
                                placeholder="John Doe"
                                isPassword={false}
                                labelStyle={styles.inputLabel}
                                boxStyle={styles.boxStyle}
                                wrapperStyle={styles.wrapperInput}
                                onFocus={() => onFocusedTextInput(nameInput)}
                                onBlur={() => onBlurredTextInput(nameInput)}
                                ref={nameInput}
                                leftIcon={false}
                                leftIconName=""
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                            <Input
                                label="Username"
                                placeholder="johndoe"
                                isPassword={false}
                                labelStyle={styles.inputLabel}
                                boxStyle={styles.boxStyle}
                                wrapperStyle={styles.wrapperInput}
                                onFocus={() => onFocusedTextInput(usernameInput)}
                                onBlur={() => onBlurredTextInput(usernameInput)}
                                ref={usernameInput}
                                leftIcon={false}
                                leftIconName=""
                                value={username}
                                onChangeText={(text) => setUsername(text)}
                            />
                            <Input
                                label="Email"
                                placeholder="john@email.com"
                                isPassword={false}
                                labelStyle={styles.inputLabel}
                                boxStyle={styles.boxStyle}
                                wrapperStyle={styles.wrapperInput}
                                onFocus={() => onFocusedTextInput(emailInput)}
                                onBlur={() => onBlurredTextInput(emailInput)}
                                ref={emailInput}
                                leftIcon={false}
                                leftIconName=""
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <View>
                                    <Text style={styles.inputLabel}>
                                        Phone number
                                    </Text>
                                    <Text style={styles.textNumber}>
                                        0812312412312
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity
                                    >
                                        <Text
                                            style={styles.editBtn}
                                        >
                                            Edit
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default Account
