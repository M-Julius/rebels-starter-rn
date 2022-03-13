import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons'
import { colour } from '../../styles'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconFeather from 'react-native-vector-icons/Feather'
import { Actions } from 'react-native-router-flux'

interface Props {
    
}

const CalendarScreen = (props: Props) => {

    const DATA_TRIP = {
        '2021-06-16': { color: colour.orangePanorama, startingDay: true, selected: true },
        '2021-06-17': { color: colour.orange200 },
        '2021-06-18': { color: colour.orange200 },
        '2021-06-19': { color: colour.orange200 },
        '2021-06-20': { color: colour.orange200 },
        '2021-06-21': { color: colour.orangePanorama, endingDay: true, selected: true }
      }

    const CustomArrow = (direction: string) => (
        <View style={styles.customArrowContainer}>
            <IconIon name={direction === 'left' ? "chevron-back-outline" : "chevron-forward-outline"} size={16} color={colour.orangePanorama} />
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.topnav}>
                <TouchableOpacity style={styles.backBtn} onPress={() => Actions.pop()}>
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Calendar</Text>
                <Text style={styles.subTitle}>See your calendar for your upcoming trip</Text>
            </View>
            <View style={styles.calendarContainer}>
                <Calendar 
                    markedDates={DATA_TRIP}
                    markingType={'period'}
                    renderArrow={(direction) => CustomArrow(direction)}
                    
                />
            </View>
            <View style={styles.tripSummaryContainer}>
                <View style={styles.tripSummaryText}>
                    <Text style={styles.dateText}>25-31 Jul 21</Text>
                    <Text style={styles.tripNameText}>Trip to Bali</Text>
                </View>
                <View>
                    <IconFeather name="arrow-up-right" size={24} />
                </View>
            </View>
        </View>
    )
}

export default CalendarScreen
