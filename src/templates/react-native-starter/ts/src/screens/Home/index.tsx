import React, { useState } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import images from '../../const/Images'
import Itinerary from './components/Itinerary'
import ItineraryEmpty from './components/ItineraryEmpty'
import styles from './style'
import IconIon from 'react-native-vector-icons/Ionicons'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { Actions } from 'react-native-router-flux'
import MainPanoramaLogo from '../../assets/images/MainLogoPanorama.svg'

const { width, height } = Dimensions.get('window');

interface Props {
    
}

const Home = (props: Props) => {

    const [isUpcomingExist, setisUpcomingExist] = useState(true)

    const TRIPS = [
        
        "trip 1",
        "trip 2",
        "trip 3"
    ]

    const DATA_SUGGESTED = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Semua',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Buah',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Susu & Keju',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e232',
          title: 'Poultry',
        },
        { empty: true, id: 'xxx' },
        { empty: true, id: 'xxx' },
        {
          id: '58694120f-3da1-471f-bd96-145571e29d72',
          title: 'Susu & Keju',
        },
        {
          id: '58694a0f-3d12-471f-bd96-145571e232',
          title: 'Poultry',
        },
        {
          id: '51194120f-3da1-471f-bd96-145571e29d72',
          title: 'Susu & Keju',
        },
        {
          id: '586784a0f-3d12-471f-bd96-145571e232',
          title: 'Poultry',
        },
        {
          id: '51124120f-3da1-471f-bd96-145571e29d72',
          title: 'Susu & Keju',
        },
        {
          id: '59986784a0f-3d12-471f-bd96-145571e232',
          title: 'Poultry',
        },
    ];

    const handleOnPressOrderList = () => {
        Actions.push('orderList')
    }

    const handleOnPressCalendar = () => {
        Actions.push('calendar')
    }

    const handleOnPressNotification = () => {
        Actions.push('notification')
    }

    const handleOnSeeSuggestedDetails = () => {
        Actions.push('suggestedItineraryDetails')
    }

    const HeaderContent = () => (
        <View style={{paddingHorizontal: 32}}>
            <View style={styles.topMenuBar}>
                <View>
                    <MainPanoramaLogo width={164} />
                </View>
                <View style={styles.topMenuIcon}>
                    <TouchableOpacity onPress={() => handleOnPressOrderList()}>
                        <IconAntDesign name="book" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOnPressCalendar()}>
                        <IconMaterial name="calendar-blank-outline" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleOnPressNotification()}>
                        <IconIon name="notifications-outline" size={24} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.userGreeting}>
                <Text style={styles.greetingText}>Helo, Jhon</Text>
                <Text style={styles.subGreetingText}>Ready to discover new experiences?</Text>
            </View>
            {
                isUpcomingExist ? (
                    <View style={styles.upcomingTripContainer}>
                        <Itinerary itineraryList={TRIPS} />
                    </View>
                )
                :
                (
                    <View>
                        <ItineraryEmpty />
                    </View>
                )
            }
            <Text style={styles.titleText}>Suggested Itinerary</Text>
        </View>
    ) 

    const FooterContent = () => (
        <View style={styles.travelAdviceContainer}>
            <Text style={styles.travelAdviceText}>Get your personalized app from the expert</Text>
            <TouchableOpacity style={styles.travelAdviceButton} >
                <Text style={styles.travelButtonText}>Get development advice</Text>
            </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList 
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
                ListHeaderComponent={HeaderContent()}
                // ListFooterComponent={FooterContent()}
                data={DATA_SUGGESTED}
                renderItem={({item, index}) => {
                    return index === 4 ? <FooterContent /> :  index === 5 ? null : (
                        <>
                            <View style={styles.imageListContainer}>
                                <TouchableOpacity key={item.id} style={styles.categoryButton} onPress={() => handleOnSeeSuggestedDetails()}>
                                    <Image source={{uri: "https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg"}} style={{width: 148, height: 148, borderRadius: 8}} />
                                </TouchableOpacity>
                                <Text style={styles.tripTitle}>3 Days Lorem ipsum..</Text>
                                <Text style={styles.tripBy}>By Rebelworks</Text>
                            </View>
                        </>
                    ) 

                }
                }
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{alignItems: 'center', flex: 1, justifyContent: 'center', paddingBottom: 16}}
                ListFooterComponentStyle={{paddingBottom: 100}}
            />
        </SafeAreaView>
    )
}

export default Home


// import React from 'react'
// import { FlatList, ScrollView, Text, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
// import { Actions } from 'react-native-router-flux'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { setChannel } from '../../actions'
// import { useAppDispatch, useAppSelector } from '../../hooks'
// import styles from './style'

// interface Props {
    
// }

// const Dashboard = (props: Props) => {


//     const dispatch = useAppDispatch()
//     const client = useAppSelector(state => state.chat.client)

//     const DATA = [
//         {
//           id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//           title: 'First Item',
//           channelId: 'ch01'
//         },
//         {
//           id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//           title: 'Second Item',
//           channelId: 'ch02'
//         },
//         {
//           id: '58694a0f-3da1-471f-bd96-145571e29d72',
//           title: 'Third Item',
//           channelId: 'ch03'
//         },
//     ];

//     const joinChannel = () => {
//         dispatch(setChannel(''))
//         // await client.join('')
//         Actions.push('chatroom')
//     }

//     const renderItem = (item: any) => (
//         <View key={item.id}>
//             <TouchableNativeFeedback style={{flex: 1}} onPress={_ => joinChannel()}>
//                 <View style={styles.item}>
//                     <View style={styles.avatarContainer}>
//                     </View>
//                     <View style={styles.chatContainer}>
//                         <Text style={styles.title}>{item.title}</Text>
//                         <Text style={styles.recentChat}>Recent Chat</Text>
//                     </View>
//                 </View>
//             </TouchableNativeFeedback>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <ScrollView style={styles.overlay}>
//                 {/* <SafeAreaView style={{flex: 1}}> */}
//                     {
//                         DATA.map(item => (
//                             renderItem(item)
//                         ))
//                     }
//                 {/* </SafeAreaView> */}
//             </ScrollView>
//         </View>
//     )
// }

// export default Dashboard
