import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import IconIon from 'react-native-vector-icons/Ionicons'
import env from '../../../env'
import styles from './styles'
import GoogleLogo from '../../assets/images/google_logo.svg'
import Misc from '../../helpers/Misc'
import { MiscHelper } from '../../helpers'
import { colour } from '../../styles'


interface Place {
    formatted_address?: string
    geometry?: Geometry
    name: string
    opening_hours?: OpeningHours
    photos?: (PhotosEntity)[] | null
    rating?: number
    addToPlanButton?: boolean
    removeFromPlanButton?: boolean
    typeOfPlace?: string
    user_ratings_total?: string
    setShowAddToItinerary?: Dispatch<SetStateAction<boolean>>
    setChosenPlace?: Dispatch<SetStateAction<any>>

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


const GOOGLE_BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const API_KEY = env.GOOGLE_API_KEY

const CardGooglePlace = (trips: Place) => {

    const handleOnPressAddButton = (chosenPlace: Place) => {
        trips.setShowAddToItinerary && trips.setShowAddToItinerary(true)
        trips.setChosenPlace && trips.setChosenPlace(chosenPlace)
    }
    
    return (
        <View style={styles.tripItem}>
                <View style={styles.imgContainer}>
                    <ImageBackground 
                        source={{uri: `${GOOGLE_BASE_URL}/photo?maxwidth=${trips.photos && trips.photos[0].width}&photoreference=${trips.photos && trips.photos[0].photo_reference}&key=${API_KEY}`}} 
                        style={{width: 80, height: 80}} 
                        imageStyle={{borderRadius: 8}} 
                        resizeMode="cover"
                    >
                        {
                            trips.addToPlanButton ? (
                                <TouchableOpacity 
                                    style={
                                        [
                                            styles.addToPlanBtn, 
                                        ]
                                     } 
                                    onPress={() => handleOnPressAddButton(trips)}
                                >
                                    <IconIon name={"add"} size={18} />
                                </TouchableOpacity>
                            ) :
                            trips.removeFromPlanButton ? (
                                <TouchableOpacity 
                                    style={
                                        [
                                            styles.addToPlanBtn, 
                                        ]
                                     } 
                                >
                                    <IconIon name={"remove"} size={18} />
                                </TouchableOpacity>
                            ) : null
                        }
                    </ImageBackground>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.typeOfPlaceBox}>
                            <Text style={styles.category}>{trips.typeOfPlace?.replace(/_/g, " ")}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.name}>{trips.name}</Text>
                    </View>
                    {
                        trips.rating ? (
                            <View style={styles.reviewContainer}>
                                <IconIon name="star" color="#FFE900" />
                                <Text style={styles.review}>{trips.rating}</Text>
                                <Text style={styles.totalRatings}>({ trips.user_ratings_total && MiscHelper.commaSeparatedNumber(trips.user_ratings_total)})</Text>
                                <GoogleLogo height={12} width={12} />
                            </View>
                        )
                        :
                        (
                            <View style={styles.reviewContainer}>
                                <Text style={styles.review}>No Rating</Text>
                            </View>
                        )
                    }
                </View>
            </View>
    )
}

export default CardGooglePlace
