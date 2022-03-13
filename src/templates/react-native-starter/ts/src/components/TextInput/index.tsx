import React, { Dispatch, ForwardedRef, forwardRef, LegacyRef, SetStateAction } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import IconAntd from 'react-native-vector-icons/AntDesign'
import styles from './style'

interface TextInputInterface {
    label?: string;
    placeholder?: string;
    isPassword?: boolean;
    labelStyle?: object;
    boxStyle?: object;
    wrapperStyle?: object;
    onFocus?: (refObject: LegacyRef<TextInput> | undefined) => void
    onBlur?: (refObject: LegacyRef<TextInput> | undefined) => void
    setIsSecure?: () => void
    icon?: boolean
    leftIcon: boolean
    callBack?: () => void
    value?: string
    defaultValue?: string
    onChangeText?: (text: string) => void
    leftIconName: string
}

const Input = forwardRef((props: TextInputInterface, ref: ForwardedRef<TextInput>) => {
    const { 
        label, 
        placeholder, 
        isPassword, 
        labelStyle, 
        boxStyle, 
        wrapperStyle,
        value,
        defaultValue,
        onBlur,
        onFocus,
        setIsSecure,
        icon,
        leftIcon,
        callBack,
        onChangeText,
        leftIconName
    } = props
    return (
        <View style={wrapperStyle}>
            {
                label !== "" || label !== undefined ? (
                    <Text style={labelStyle}>{label}</Text>
                )
                :
                null
            }
            <TextInput 
                ref={ref}
                style={boxStyle} 
                placeholder={placeholder} 
                secureTextEntry={isPassword} 
                onFocus={() => onFocus ? onFocus(ref) : null}
                onBlur={() => onBlur ? onBlur(ref) : null}
                onChangeText={onChangeText}
                value={value}
                defaultValue={defaultValue}
            />
            <View style={styles.container}>
                {
                    icon ? (
                        <TouchableOpacity style={styles.iconStyle} onPress={setIsSecure}>
                            <Icon name={isPassword ? "eye-off-outline" : "eye-outline"} size={18} />
                        </TouchableOpacity>
                    )
                    :
                    null
                }
                {
                    leftIcon ? (
                        <TouchableOpacity style={styles.leftIconStyle} onPress={callBack}>
                            <Icon name={leftIconName} size={18} />
                        </TouchableOpacity>
                    )
                    :
                    null
                }
            </View>
        </View>
    )
})

export default Input
