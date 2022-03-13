import React, { RefObject, useRef, useState } from 'react'
import { Animated, FlatList, ImageBackground, SafeAreaView, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View, TextInput } from 'react-native'
import styles from './style'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/AntDesign'
import ChatLogo from '../../assets/images/chat_logo.svg'
import ItineraryLogo from '../../assets/images/itinerary_book.svg'
import Input from '../../components/TextInput'
interface Props {
    
}

const ItineraryList = (props: Props) => {
    const DUMMY = [
        {
            id: 1,
            name: 'Trip To Bali',
            person: 5,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 2,
            name: 'Trip To Jakarta',
            person: 3,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 3,
            name: 'Trip To Sorong',
            person: 4,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 4,
            name: 'Trip To Sorong',
            person: 4,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        },
        {
            id: 5,
            name: 'Trip To Sorong',
            person: 4,
            src: 'https://images.unsplash.com/photo-1623709537069-80ff1bfff9e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80'
        }
    ]

    const DUMMY_HISTORY = [
        {
            id: 1,
            name: 'Trip To Bali',
            person: 5,
            src: 'https://images.unsplash.com/photo-1623716495270-48dd5004496e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        },
        {
            id: 2,
            name: 'Trip To Jakarta',
            person: 3,
            src: 'https://images.unsplash.com/photo-1623716495270-48dd5004496e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
        },
    ]

    const [isClick, setIsClick] = useState(true)
    const [dataSet, setDataSet] = useState(DUMMY)
    const [openModalChatWithTC, setOpenModalChatWithTC] = useState(false)

    let chatInput = useRef<TextInput>(null)

    const animation = new Animated.Value(0);

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
                    <Text style={styles.screenTitleText}>Itinerary</Text>
                </View>
                <View style={styles.categoryOptionContainer}>
                    <TouchableOpacity onPress={_ => handleOnGoing()} style={[ isClick ? styles.buttonStyle : styles.buttonSecondStyle]}>
                        <Text style={[ isClick ? styles.buttonText : styles.buttonTextAlt]}>On going Trip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={_ => handleOnHistory()} style={[ !isClick ? styles.buttonStyle : styles.buttonSecondStyle ]}>
                        <Text style={[ !isClick ? styles.buttonText : styles.buttonTextAlt]}>History</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    let toggle = true
    
    const toggleMenu = () => {
        const toValue = toggle ? 1 : 0
        Animated.spring(animation, {
            toValue: toValue,
            friction: 5,
            useNativeDriver: true
        }).start()
        
        toggle = !toggle
    }

    const pinStyle = {
        transform : [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80]
                })
            }
        ]
    }

    const pinStyle2 = {
        transform : [
            { scale: animation },
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -130]
                })
            }
        ]
    }

    const rotation = {
        transform : [
            {
                rotate: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: ["0deg", "135deg"]
                })
            }
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

    return (
        <SafeAreaView>
            <FlatList 
                data={dataSet}
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                decelerationRate="fast"
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
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.floatingOptions, pinStyle2]}>
                        <ItineraryLogo style={styles.optionLogo} />
                        <Text style={styles.textOption}>Create new Itinerary</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => setOpenModalChatWithTC(true)}>
                    <Animated.View style={[styles.floatingOptions, pinStyle]}>
                        <ChatLogo style={styles.optionLogo} />
                        <Text style={styles.textOption}>Chat with TC</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <Animated.View style={[styles.floatingButton, rotation]}>
                        <Icon name="plus" size={32} color="#ffffff" />
                    </Animated.View>
                </TouchableWithoutFeedback>
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
