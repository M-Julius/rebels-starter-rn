import React, { RefObject, useRef, useState } from 'react'
import { Animated, FlatList, ImageBackground, SafeAreaView, Modal, Text, TouchableOpacity, View, TextInput, StyleSheet, Dimensions } from 'react-native'
import styles from './style'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/AntDesign'
import ChatLogo from '../../assets/images/chat_logo.svg'
import ItineraryLogo from '../../assets/images/itinerary_book.svg'
import Input from '../../components/TextInput'
import { Actions } from 'react-native-router-flux'
import { useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
interface Props {

}

const ItineraryList = (props: Props) => {
    const DUMMY = [
        {
            id: 1,
            name: 'Card Unit One',
            person: 5,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 2,
            name: 'Card Unit two',
            person: 3,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 3,
            name: 'Card Unit More',
            person: 4,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 4,
            name: 'Card Unit More',
            person: 4,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 5,
            name: 'Card Unit More',
            person: 4,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        }
    ]

    const DUMMY_HISTORY = [
        {
            id: 1,
            name: 'Card Unit One',
            person: 5,
            src: 'https://images.unsplash.com/photo-1623716495270-48dd5004496e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        },
        {
            id: 2,
            name: 'Card Unit More',
            person: 3,
            src: 'https://images.unsplash.com/photo-1623716495270-48dd5004496e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        },
    ]

    const [isClick, setIsClick] = useState(true)
    const [dataSet, setDataSet] = useState(DUMMY)
    const [showBackdrop, setShowBackdrop] = useState(false)
    const [openModalChatWithTC, setOpenModalChatWithTC] = useState(false)

    let chatInput = useRef<TextInput>(null)

    // const animation = new Animated.Value(0.01);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const animation = useRef(new Animated.Value(0)).current;


    const handleOnGoing = () => {
        setIsClick(true)
        setDataSet(DUMMY)
    }

    const handleOnHistory = () => {
        setIsClick(false)
        setDataSet(DUMMY_HISTORY)
    }

    const HeaderComponent = () => {
        return (
            <View style={styles.headerContent}>

                <View style={styles.screenTitleContainer}>
                    <Text style={styles.screenTitleText}>List of things...</Text>
                </View>
                <View style={styles.categoryOptionContainer}>
                    <TouchableOpacity onPress={_ => handleOnGoing()} style={[ isClick ? styles.buttonStyle : styles.buttonSecondStyle]}>
                        <Text style={[ isClick ? styles.buttonText : styles.buttonTextAlt]}>Option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_ => handleOnHistory()} style={[ !isClick ? styles.buttonStyle : styles.buttonSecondStyle ]}>
                        <Text style={[ !isClick ? styles.buttonText : styles.buttonTextAlt]}>Option 2</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    let toggle = true

    const toggleMenu = () => {
        console.log('test toggle')
        const toValue = toggle ? 1 : 0
        Animated.spring(animation, {
            toValue: toValue,
            bounciness: 0.5,
            useNativeDriver: true,
            speed: 25,
        }).start()

        Animated.timing(fadeAnim, {
            toValue: toValue,
            duration: 10,
            useNativeDriver: true,
        }).start();

        toggle = !toggle
    }

    const pinStyle = {
        transform : [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -60]
                })
            },
            { perspective: 1000 }
        ]
    }

    const pinStyle2 = {
        transform : [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -110]
                })
            },
            { perspective: 1000 }
        ]
    }

    const rotation = {
        transform : [
            {
                rotate: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: ["0deg", "135deg"]
                })
            },
            { perspective: 1000 }
        ]
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

    const handleOpenChatWithTC = () => {
        setOpenModalChatWithTC(true)
        toggleMenu()
    }

    const handleCreateNewItinerary = () => {
        Actions.push('itineraryForm')
        toggleMenu()
    }

    return (
        <SafeAreaView>
            <Animated.View style={[styles.fadingContainer, { opacity: fadeAnim, zIndex: fadeAnim}]} />
            <FlatList
                data={dataSet}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                decelerationRate="normal"
                renderItem={({item}) => (
                    <ImageBackground
                        source={{uri: item.src}}
                        style={styles.itineraryCard}
                        imageStyle={{borderRadius: 8}}
                    >
                        <View style={styles.tripSummary}>
                            <Text style={styles.tripName}>{item.name}</Text>
                            <Text style={styles.members}>25 Jul - 31 Jul 2021 • 5 members</Text>
                        </View>
                    </ImageBackground>
                )}
                ListHeaderComponent={HeaderComponent}
                ListHeaderComponentStyle={styles.headerComponent}
            />

            <View style={[styles.floatingButtonContainer]}>
                <Animated.View style={[styles.floatingOptions, pinStyle2]}>
                    <TouchableWithoutFeedback style={{flexDirection: 'row'}} onPress={() => handleCreateNewItinerary()}>
                            <ItineraryLogo style={styles.optionLogo} />
                            <Text style={styles.textOption}>Create new Itinerary</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>
                <Animated.View style={[styles.floatingOptions, pinStyle]}>
                    <TouchableWithoutFeedback style={{flexDirection: 'row'}} onPress={() => handleOpenChatWithTC()}>
                            <ChatLogo style={styles.optionLogo} />
                            <Text style={styles.textOption}>Chat with TC</Text>
                    </TouchableWithoutFeedback>
                </Animated.View>
                <Animated.View style={[styles.floatingButton, rotation]}>
                    <TouchableWithoutFeedback onPress={() => toggleMenu()}>
                            <Icon name="plus" size={32} color="#ffffff" />
                    </TouchableWithoutFeedback>
                </Animated.View>
            </View>

            <Modal visible={openModalChatWithTC} animationType="fade" transparent>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Create chat with TC</Text>
                            <TouchableOpacity onPress={() => setOpenModalChatWithTC(false)}>
                                <Text style={styles.closeModalText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Input
                                label="Chat name"
                                placeholder="Solo trip to bali..."
                                isPassword={false}
                                labelStyle={styles.inputLabel}
                                boxStyle={styles.boxStyle}
                                wrapperStyle={styles.wrapperInput}
                                onFocus={() => onFocusedTextInput(chatInput)}
                                onBlur={() => onBlurredTextInput(chatInput)}
                                ref={chatInput}
                                leftIcon={false}
                                leftIconName=""
                            />
                        </View>
                        <View style={styles.modalFooter}>
                            <TouchableOpacity style={styles.confirmButton}>
                                <Text style={styles.confirmText}>Chat with TC</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

export default ItineraryList
