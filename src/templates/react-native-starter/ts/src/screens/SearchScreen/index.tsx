import React, { Dispatch, SetStateAction, useState } from 'react'
import {
    Modal,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native'
import { GooglePlaceData, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Icon from 'react-native-vector-icons/Ionicons'
import ExploreAction from '../../store/Explore/explore.action'
import { useAppDispatch, useAppSelector } from '../../helpers/Hooks'
import { colour } from '../../styles'
import styles from './style'
import env from '../../../env'
import CardGooglePlace from '../../components/CardGooglePlace'
import ResultContainer from './ResultContainer'
import { Actions } from 'react-native-router-flux'

interface SearchScreenProps {
    visible?: boolean
    setVisible?: Dispatch<SetStateAction<boolean>>
}

interface Place {
    formatted_address?: string;
    geometry?: Geometry;
    name: string;
    opening_hours?: OpeningHours;
    photos?: (PhotosEntity)[] | null;
    rating?: number;
    addToPlanButton?: boolean
    typeOfPlace?: string
}

interface Geometry {
    location: NortheastOrSouthwestOrLocation;
    viewport: Viewport;
}

interface NortheastOrSouthwestOrLocation {
    lat: number;
    lng: number;
}

interface Viewport {
    northeast: NortheastOrSouthwestOrLocation;
    southwest: NortheastOrSouthwestOrLocation;
}

interface OpeningHours {
    open_now: boolean;
}

interface PhotosEntity {
    height: number;
    html_attributions?: (string)[] | null;
    photo_reference: string;
    width: number;
}
  

const SearchScreen = (props: SearchScreenProps) => {
 


    const dispatch = useAppDispatch()

    const handleOnSelected = (description: string) => {
        dispatch(ExploreAction.getDataPlaces(description))
        // setVisible(false)
    }

    const handleBack = () => {
        Actions.pop()
    }


    return (
        // <View>
            <SafeAreaView>
                {/* <View> */}
                    <View style={styles.topnav}>
                        <TouchableOpacity style={styles.backBtn} onPress={() => handleBack()}>
                            <Icon name={"arrow-back"} size={24} />
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.searchText}>Where are you going?</Text>
                        {/* <View> */}
                            <ResultContainer />
                        {/* </View> */}
                        {/* <GooglePlacesAutocomplete
                            enablePoweredByContainer={false}
                            fetchDetails={true}
                            minLength={3}
                            debounce={200}
                            GooglePlacesSearchQuery={
                                {
                                    key: env.GOOGLE_API_KEY,
                                    rankby: 'distance'
                                }
                            }
                            placeholder='Places, restaurant, hotel, etc...'
                            onPress={(data, details = null) => {
                                handleOnSelected(data.description)
                            }}
                            query={{
                                key: env.GOOGLE_API_KEY,
                                language: 'en',
                            }}
                            styles={{
                                textInput: {
                                    color: '#5d5d5d',
                                    fontSize: 16,
                                    borderColor: colour.grey50,
                                    borderWidth: 1,
                                    borderRadius: 8
                                },
                                // predefinedPlacesDescription: {
                                //     color: '#1faadb',
                                // },
                            }}
                            renderRow={(data, index) => {
                                return (
                                    <CardGooglePlace 
                                        key={index}
                                        // typeOfPlace={data.types[1]} 
                                        name={data.description} 
                                    />
                                )
                            }}
                        /> */}
                    </View>
                {/* </View> */}
            </SafeAreaView>   
        // </View>
    )
}

export default SearchScreen