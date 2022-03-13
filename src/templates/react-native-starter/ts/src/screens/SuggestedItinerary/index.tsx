import React, { useState } from 'react'
import { Animated, Dimensions, FlatList, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import IconIon from 'react-native-vector-icons/Ionicons'
import BottomSheet from '../../components/BottomSheet'
// import { colour } from ''

interface Props {
    
}

interface DataTrip {
    id: string;
    day: number;
    data_trips: {
        trip_id: string;
        category: string;
        name: string;
        review: string;
        img_src: string;
    }[];
}[]

interface Trip {
    trip_id: string;
    category: string;
    name: string;
    review: string;
    img_src: string;
}

const SuggestedItineraryDetails = (props: Props) => {

    const [trips, setTrips] = useState<DataTrip[]>([])
    const [showAddToPlan, setShowAddToPlan] = useState<boolean>(false)
    const [showAddToItinerary, setShowAddToItinerary] = useState<boolean>(false)
    

    const onDayChosen = (id: string) => {
        
        if(id === 'all') {
            setTrips(DATA_DUMMY)
        } else {
            DATA_DUMMY.map(item => {
                if(item.id === id){
                    setTrips([item])
                } 
            })
        }
    } 

    const onPressBack = () => {
        setShowAddToItinerary(false)
        setShowAddToPlan(true)
    }

    const DATA_DUMMY = [
        {
            id: "1237",
            day: 1,
            data_trips: [
                {
                    trip_id: "93719283asd9",
                    category: "hotel",
                    name: "Padma Resort Ubud",
                    review: "4.8 (1,192)",
                    img_src: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/presidential-suite-v6273472-1440-1024x683.jpg"
                },
                {
                    trip_id: "1232342vsdf",
                    category: "attraction",
                    name: "Tegalang Rice Terrace",
                    review: "4.8 (2,3192)",
                    img_src: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/presidential-suite-v6273472-1440-1024x683.jpg"
                }
            ]
        },
        {
            id: "293182",
            day: 2,
            data_trips: [
                {
                    trip_id: "434123645fhrge",
                    category: "hotel",
                    name: "Padma Resort Bali",
                    review: "4.8 (10,239)",
                    img_src: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/presidential-suite-v6273472-1440-1024x683.jpg"
                },
                {
                    trip_id: "657567ghjrtd",
                    category: "attraction",
                    name: "Tegalang Terrace",
                    review: "4.8 (11.000)",
                    img_src: "https://www.oyster.com/wp-content/uploads/sites/35/2019/05/presidential-suite-v6273472-1440-1024x683.jpg"
                }
            ]
        }
    ]

    const HeaderContent = () => (
        <View>
            <View style={styles.topImageContainer}>
                <Text>Image</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleStyle}>3 days trip to Bali</Text>
                <Text style={styles.descriptionStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, 
                    quis pharetra in sit morbi pellentesque eget felis. 
                    Eget dignissim id viverra amet. Tempor facilisis quisque ornare tincidunt.{"\n"}{"\n"}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, 
                    quis pharetra in sit morbi pellentesque eget felis. 
                    Eget dignissim id viverra amet. Tempor facilisis quisque ornare tincidunt.
                </Text>
            </View>
            <ScrollView 
                horizontal 
                style={styles.dayListContainer}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity style={styles.dayComponentStyle} onPress={() => onDayChosen("all")}>
                    <Text style={styles.dayComponentText}>All</Text>
                </TouchableOpacity>
                {
                    DATA_DUMMY.map((item, i) => (
                        <TouchableOpacity style={styles.dayComponentStyle} onPress={() => onDayChosen(item.id)}>
                            <Text style={styles.dayComponentText}>Day {item.day}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <View style={styles.divider} />
        </View>
    )

    const TripPlace = (trips: Trip) => {
        return (
            <View style={styles.tripItem}>
                <View style={styles.imgContainer}>
                    <ImageBackground source={{uri: trips.img_src}} style={{width: 80, height: 80}} imageStyle={{borderRadius: 8}} resizeMode="cover">
                        <TouchableOpacity style={styles.addToPlanBtn} onPress={() => setShowAddToPlan(true)}>
                            <IconIon name="add" size={18} />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <View style={styles.categoryContainer}>
                        <Text style={styles.category}>{trips.category}</Text>
                    </View>
                    <View>
                        <Text style={styles.name}>{trips.name}</Text>
                    </View>
                    <View style={styles.reviewContainer}>
                        <IconIon name="star" color="#FFE900" />
                        <Text style={styles.review}>{trips.review}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const AddToPlanContent = () => (
        <ScrollView bounces={false}>
            {
                ["Trip to Bali", "Trip to Jakarta", "Trip to Paris"].map(item => (
                    <TouchableOpacity onPress={() => {
                        setShowAddToPlan(false)
                        setShowAddToItinerary(true)
                    }}>
                        <Text style={styles.optionListStyle}>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )

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
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
                data={trips}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={styles.dayText}>Day {item.day}</Text>
                            {
                                item.data_trips.map(trips => (
                                    <TripPlace {...trips}/>
                                ))
                            }
                        </View>
                    )
                }}
                ListHeaderComponent={HeaderContent()}
                keyExtractor={item => item.id}
            />
            <BottomSheet 
                visible={showAddToPlan} 
                title="Add to Plan"
                setVisible={setShowAddToPlan}
                content={AddToPlanContent()}
            />
            <BottomSheet 
                visible={showAddToItinerary} 
                title="Add to Itinerary"
                setVisible={setShowAddToItinerary}
                backButton={true}
                onPressBack={onPressBack}
                content={AddToItineraryContent()}
            />
        </SafeAreaView>
    )
}

export default SuggestedItineraryDetails
