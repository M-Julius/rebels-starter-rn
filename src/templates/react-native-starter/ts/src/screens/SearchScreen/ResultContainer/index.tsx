import React, { useState } from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import BottomSheet from '../../../components/BottomSheet'
import CardGooglePlace from '../../../components/CardGooglePlace'
import { useAppDispatch, useAppSelector } from '../../../helpers/Hooks'
import exploreAction from '../../../store/Explore/explore.action'
import styles from './style'

interface Props {
    
}

const ResultContainer = (props: Props) => {


    const [showAddToItinerary, setShowAddToItinerary] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const places = useAppSelector(state => state.explore.places)


    const handleChangeText = (keyword: string) => {
        dispatch(exploreAction.getDataNearByPlaces(keyword))
    }

    const handleShowBottomSheet = (falsy: boolean) => {
        setShowAddToItinerary(falsy)
    }

    const AddToItineraryContent = () => (
        <ScrollView bounces={false}>
            {
                ["Friday, 25 July 2021", "Friday, 25 July 2021", "Friday, 25 July 2021"].map(item => (
                    <TouchableOpacity>
                        <Text style={styles.optionListStyle}>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )

    return (
        <View style={{flex: 1}}>
            <TextInput 
                style={styles.textInput}
                placeholder='Places, restaurant, hotel, etc...'
                onChangeText={text => handleChangeText(text)}
            />
            <ScrollView 
                style={styles.resultContainerStyle}
                showsVerticalScrollIndicator={false}
            >
                {
                    places && places.map((place: any) => (
                        <CardGooglePlace {...place} typeOfPlace={place.types[0]} addToPlanButton={true} setShowAddToItinerary={() => handleShowBottomSheet(true)}  />
                    ))
                }
            </ScrollView>
            <BottomSheet 
                visible={showAddToItinerary} 
                title="Add to Itinerary"
                setVisible={setShowAddToItinerary}
                content={AddToItineraryContent()}
            />
        </View>
    )
}

export default ResultContainer
