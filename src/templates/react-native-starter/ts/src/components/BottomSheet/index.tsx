import React, { ReactNode } from 'react'
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import IconIon from 'react-native-vector-icons/Ionicons'

interface BottomSheetInterface {
    visible: boolean
    content?: ReactNode
    title?: string
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    backButton?: boolean
    onPressBack?: () => void
}

const BottomSheet = (props: BottomSheetInterface) => {
    const { visible, content, title, setVisible, backButton, onPressBack } = props
    return (
        <Modal
            animationType="fade"
            visible={visible}
            transparent
        >
            <View style={[styles.overlay]}>
                <Animated.View style={[styles.modal]}>
                    <View style={styles.modalNavigation}>
                        <View style={styles.titleContainer}>
                            {
                                backButton && onPressBack ? (
                                    <TouchableOpacity style={styles.backButtonStyle} onPress={() => onPressBack()}>
                                        <IconIon name="arrow-back" size={18} />
                                    </TouchableOpacity>
                                )
                                :
                                null
                            }
                            <Text style={styles.titleText}>{title}</Text>
                        </View>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <IconIon name="close-outline" size={18} />
                        </TouchableOpacity>
                    </View>
                    {
                        content
                    }
                </Animated.View>
            </View>
        </Modal>
    )
}

export default BottomSheet
