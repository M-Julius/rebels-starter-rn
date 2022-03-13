import React, { useState } from 'react'
import {
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native'
import styles from './style'
import IconIon from 'react-native-vector-icons/Ionicons'
import { useAppDispatch, useAppSelector } from '../../../../helpers/Hooks'
import { useEffect } from 'react'
import env from '../../../../../env'
import CardGooglePlace from '../../../../components/CardGooglePlace'
import { Actions } from 'react-native-router-flux'
import BottomSheet from '../../../../components/BottomSheet'
import exploreAction from '../../../../store/Explore/explore.action'

interface Props {

}

interface Trip {
    trip_id: string;
    category: string;
    name: string;
    review: string;
    img_src: string;
}

interface Place {
    formatted_address: string;
    geometry: Geometry;
    name: string;
    opening_hours: OpeningHours;
    photos?: (PhotosEntity)[] | null;
    rating: number;
    types: Array<string>
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


const Explore = (props: Props) => {


    const [showAddToItinerary, setShowAddToItinerary] = useState<boolean>(false)
    const [chosenPlace, setChosenPlace] = useState<any>(null)

    const thingsToDo = useAppSelector(state => state.explore.thingsToDo)
    const restaurantsRecommendation = useAppSelector(state => state.explore.restaurantsRecommendation)
    const itineraryPlan = useAppSelector(state => state.itinerary.itineraryPlan)

    const DATA_DUMMY = [
        1,2,3,
    ]

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(exploreAction.getRecommendationPlaces(itineraryPlan.whereTo, 'things to do in', 'attraction'))
        dispatch(exploreAction.getRecommendationPlaces(itineraryPlan.whereTo, 'Restaurant to visit in', 'food'))
    }, [])

    const handleShowBottomSheet = (falsy: boolean) => {
        setShowAddToItinerary(falsy)
    }

    const handleAddToItinerary = (chosenItem: any, chosenDate: any) => {
        itineraryPlan.dateRanges.map((existingDate: any) => {
            if(existingDate === chosenDate){
                existingDate.places.push(chosenItem)
            }
        })
    }

    const exploreResultList = (title: string, data: Array<Place>) => {
        return (

            <View style={styles.topSectionContainer}>
                <Text style={styles.topSectionTitle}>{title} {itineraryPlan.whereTo}</Text>
                <ScrollView >
                    {
                        data && data.map((item: Place, index: number) => {
                            if(thingsToDo.length > 4){
                                if(index < 4){
                                    return (
                                        <CardGooglePlace 
                                            key={index} 
                                            {...item} 
                                            typeOfPlace={item.types[0]} 
                                            addToPlanButton={true} 
                                            setShowAddToItinerary={() => handleShowBottomSheet(true)} 
                                            setChosenPlace={setChosenPlace}
                                        />
                                    )
                                }
                            } else {
                                return (
                                    <CardGooglePlace 
                                        key={index} 
                                        {...item} 
                                        typeOfPlace={item.types[0]} 
                                        addToPlanButton={true} 
                                        setShowAddToItinerary={() => handleShowBottomSheet(true)} 
                                    />
                                )
                            }

                        })
                    }
                </ScrollView>
            </View>
        )
    }

    const HeaderExploreComponent = () => {
        return (
            <View>
                <View style={styles.searchLabelContainer}>
                    <Text style={styles.searchLabel}>Where are you going?</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => Actions.push('searchScreen')}>
                    <View pointerEvents="none">
                        <TextInput
                            placeholder="Places, restaurant, hotel, etc..."
                            style={styles.searchBoxStyle}
                            onFocus={() => Actions.push('searchScreen')}
                        />
                    </View>
                </TouchableOpacity>
                {
                    exploreResultList('Things to do in', thingsToDo)
                }
                <View style={styles.midSectionTitleContainer}>
                    <Text style={styles.midSectionTitle}>Our best from the experts</Text>
                </View>

                <BottomSheet
                    visible={showAddToItinerary}
                    title="Add to Itinerary"
                    setVisible={setShowAddToItinerary}
                    content={AddToItineraryContent()}
                />
            </View>
        )
    }

    const AddToItineraryContent = () => (
        <ScrollView bounces={false}>
            { itineraryPlan &&
                itineraryPlan.dateRanges && itineraryPlan.dateRanges.map((item: any, index: number) => (
                    <TouchableOpacity key={index} onPress={() => handleAddToItinerary(chosenPlace, item)}>
                        <Text style={styles.optionListStyle}>{item.date.toDateString()}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )

    return (
        <FlatList
            scrollEventThrottle={1}
            showsVerticalScrollIndicator={false}
            decelerationRate="fast"
            contentContainerStyle={[styles.midSectionContainer]}
            numColumns={2}
            data={DATA_DUMMY}
            extraData={1}
            renderItem={({item, index}) => {
                return false 

                ?
                    <TouchableOpacity style={styles.viewAllSuggested}>
                        <Text style={styles.viewAllSuggestedText}>View all suggested itinerary</Text>
                    </TouchableOpacity>
                :
                (
                    <View
                    style={[
                            styles.imageListContainer,
                            index % 2 === 0
                                ? styles.marginRightContent
                                : styles.noMarginRightContent,
                        ]}
                    >
                        <TouchableOpacity style={styles.categoryButton}>
                            <Image
                                source={{uri: "https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg"}}
                                style={{
                                    width: 148,
                                    // minWidth: '90%',
                                    height: 148,
                                    // minHeight: '90%',
                                    borderRadius: 8,
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.tripTitle}>3 days trip to London</Text>
                        <Text style={styles.tripBy}>By Panorama</Text>
                    </View>

                )
            }}

            ListHeaderComponent={HeaderExploreComponent}
            keyboardShouldPersistTaps="handled"
            ListFooterComponent={(
                <>
                    <TouchableOpacity style={styles.viewAllSuggested}>
                        <Text style={styles.viewAllSuggestedText}>View all suggested itinerary</Text>
                    </TouchableOpacity>
                    {
                        exploreResultList("Restaurants you might like in", restaurantsRecommendation)
                    }
                </>
            )}
        />
    )
}

export default React.memo(Explore)
