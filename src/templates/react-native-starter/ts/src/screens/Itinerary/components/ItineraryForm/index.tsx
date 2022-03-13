import React, { RefObject, useEffect, useRef, useState } from 'react'
import { 
    ScrollView, 
    TextInput, 
    View,
    SafeAreaView, 
    Text, 
    TouchableOpacity,
    KeyboardAvoidingView, 
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Input from '../../../../components/TextInput'
import styles from './style'
import CalendarPicker from 'react-native-calendar-picker';
import PersonAdd from '../../../../assets/images/person-add.svg'
import { Actions } from 'react-native-router-flux'
import BottomSheet from '../../../../components/BottomSheet'
import { colour } from '../../../../styles'
import moment from 'moment'
import { useAppDispatch } from '../../../../helpers/Hooks'
import itineraryAction from '../../../../store/Itinerary/itinerary.action'
import { MiscHelper } from '../../../../helpers'

interface Props {
    
}
interface FriendInterface {
    key: number
}

const ItineraryForm = (props: Props) => {
    
    const [addFriend, setAddFriend] = useState<Array<FriendInterface>>([])
    const [totalFriend, setTotalFriend] = useState<number>(0)
    const [showCalender, setShowCalendar] = useState<boolean>(false)
    const [selectedStartDate, setSelectedStartDate] = useState<string>('')
    const [selectedEndDate, setSelectedEndDate] = useState<string>('')
    const [rangeDate, setRangeDate] = useState<string>('')
    const [tripTitle, setTripTitle] = useState<string>('')
    const [whereTo, setWhereTo] = useState<string>('')
    const [disableContinueButton, setDisableContinueButton] = useState<boolean>(true)
    
    const handleAddFriend = () => {
        setTotalFriend(totalFriend + 1)
        setAddFriend(prevState => [...prevState, {key: totalFriend}])
    }

    let tripName = useRef<TextInput>(null)
    let tripLocation = useRef<TextInput>(null)
    let tripDate = useRef<TextInput>(null)
    let tripMember = useRef<TextInput>(null)

    const dispatch = useAppDispatch()

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

    const showDatePicker = () => {
        setShowCalendar(true)
    }

    useEffect(() => {
        if(selectedEndDate && selectedStartDate || selectedEndDate !== '' && selectedStartDate !== ''){
            setRangeDate(`${selectedStartDate} - ${selectedEndDate}`)
        }else{
            setRangeDate('')
        }
    }, [selectedStartDate, selectedEndDate])

    useEffect(() => {
        if(whereTo !== '' && tripTitle !== '' && selectedStartDate !== '' && selectedEndDate !== ''){
            setDisableContinueButton(false)
        }else {
            setDisableContinueButton(true)
        }
    }, [whereTo, tripTitle, selectedEndDate, selectedStartDate])

    const onDateChange = (date: any, type: any) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date?.format('DD-MM-YYYY'));
        } else {
            setSelectedEndDate('');
            setSelectedStartDate(date?.format('DD-MM-YYYY'));
        }
    };

    const handleStartPlanning = () => {
        Alert.alert('Success Message', 'Thanks for using this skeleton')

        dispatch(itineraryAction.setItineraryPlan({
            tripTitle,
            selectedStartDate,
            selectedEndDate,
            whereTo,
            dateRanges: MiscHelper.enumerateDaysBetweenDates(selectedStartDate, selectedEndDate)
        }))
    }

    const renderContentCalendar = () => (
        <CalendarPicker
            headerWrapperStyle={{paddingHorizontal: 32}}
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={new Date()}
            weekdays={
                [ 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat','Sun']
            }
            months={[
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ]}
            previousTitle="previous"
            nextTitle="next"
            scaleFactor={400}
            todayBackgroundColor={colour.orangePanorama}
            selectedDayColor={colour.orangePanorama}
            selectedDayTextColor={colour.white}
            textStyle={{
                color: '#000000',
            }}
            onDateChange={onDateChange}
        />
    )

    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.topnav}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => Actions.pop()}>
                            <Icon name={"arrow-back"} size={24} />
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.screenHeaderContainer}>
                        <Text style={styles.screenTitle}>Plan new itinerary</Text>
                        <Text style={styles.description}>Map out your travel plans, make your travel dreams come true</Text>
                    </View>
                    <View style={styles.form}>
                        <Input 
                            label="Trip name" 
                            placeholder="Panorama holiday trip to ..." 
                            isPassword={false} 
                            labelStyle={styles.inputLabel}
                            boxStyle={styles.boxStyle}
                            wrapperStyle={styles.wrapperInput}
                            onFocus={() => onFocusedTextInput(tripName)}
                            onBlur={() => onBlurredTextInput(tripName)}
                            ref={tripName}
                            leftIcon={false}
                            leftIconName=""
                            value={tripTitle}
                            onChangeText={(text) => setTripTitle(text)}
                        />
                        <Input 
                            label="Where to?" 
                            placeholder="e.g. London, Tokyo, Swiss..." 
                            isPassword={false} 
                            labelStyle={styles.inputLabel}
                            boxStyle={styles.boxStyle}
                            wrapperStyle={styles.wrapperInput}
                            onFocus={() => onFocusedTextInput(tripLocation)}
                            onBlur={() => onBlurredTextInput(tripLocation)}
                            ref={tripLocation}
                            leftIcon={false}
                            leftIconName=""
                            value={whereTo}
                            onChangeText={(text) => setWhereTo(text)}
                        />

                        <TouchableOpacity activeOpacity={1} onPress={() => showDatePicker()}>
                            <View pointerEvents="none">
                            <Input 
                                label="How long is your trip?" 
                                placeholder="Enter your trip date" 
                                isPassword={false} 
                                labelStyle={styles.inputLabel}
                                boxStyle={styles.boxStyleAlt}
                                wrapperStyle={styles.wrapperInput}
                                onFocus={() => onFocusedTextInput(tripDate, 'tripDate')}
                                onBlur={() => onBlurredTextInput(tripDate)}
                                ref={tripDate}
                                leftIcon={true}
                                leftIconName="calendar"
                                callBack={showDatePicker}
                                value={rangeDate}
                            />
                            </View>
                        </TouchableOpacity>

                        <Input 
                            label="Invite your friends (Optional)" 
                            placeholder="name@mail.com"
                            isPassword={false} 
                            labelStyle={styles.inputLabel}
                            boxStyle={styles.boxStyle}
                            wrapperStyle={styles.wrapperInput}
                            onFocus={() => onFocusedTextInput(tripMember)}
                            onBlur={() => onBlurredTextInput(tripMember)}
                            ref={tripMember}
                            leftIcon={false}
                            leftIconName=""
                        />

                        {
                            addFriend.map((friendInput, i) => (
                                <TextInput 
                                    style={styles.addFriendBoxStyle} 
                                    key={i} 
                                    placeholder="name@mail.com"
                                />
                            ))
                        }

                        <BottomSheet 
                            title="Choose your trip date"
                            visible={showCalender}
                            setVisible={setShowCalendar}
                            content={renderContentCalendar()}
                        />
                        
                        <TouchableOpacity style={styles.addFriendContainer} onPress={() => handleAddFriend()}>
                            <PersonAdd style={styles.addFriendIcon} />
                            <Text style={styles.addFriendText}>add friend</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.confirmButton, disableContinueButton ? {backgroundColor: colour.orangeDisable} : {backgroundColor: colour.orangePanorama} ]} 
                            disabled={disableContinueButton} 
                            onPress={() => handleStartPlanning()}
                        >
                            <Text style={styles.confirmText}>Start planning now</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ItineraryForm
