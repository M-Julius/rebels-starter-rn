import React, { SetStateAction, useCallback, useEffect } from 'react'
import { useState } from 'react'
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Dimensions,
    Keyboard
} from 'react-native';
import { TabView, SceneMap, SceneRendererProps, NavigationState, TabBar } from 'react-native-tab-view';
import { colour } from '../../../../styles';
import styles from './style';
import IconAntd from 'react-native-vector-icons/AntDesign'
import IconIon from 'react-native-vector-icons/Ionicons'
import BottomSheet from '../../../../components/BottomSheet/index'
import { GiftedChat, Bubble, Composer, Send } from 'react-native-gifted-chat';
import { useAppDispatch, useAppSelector } from '../../../../helpers/Hooks';
import Explore from '../Explore/index'
import moment from 'moment';
import { MiscHelper } from '../../../../helpers';
import CardGooglePlace from '../../../../components/CardGooglePlace';
interface ItineraryDetailPageProps {
    tripTitle: string
    selectedStartDate: string
    selectedEndDate: string,
    tripName: string
    chat: SetStateAction<number>
}

type Route = {
    key: string;
    title: string;
};
interface Trip {
    trip_id: string;
    category: string;
    name: string;
    review: string;
    img_src: string;
}

const ItineraryDetailPage = (props: ItineraryDetailPageProps) => {

    type State = NavigationState<Route>;

    const [index, setIndex] = useState<number>(0)
    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const [routes] = useState([
        { key: 'first', title: 'Itinerary' },
        { key: 'second', title: 'Chat' },
        { key: 'third', title: 'Explore' },
    ]);
    const [messages, setMessages] = useState([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
        },
    ]);
    const [dataRanges, setDataRanges] = useState<Array<Object>>([])

    useEffect(() => {
        if(props.chat) {
            setIndex(props.chat)
        }

    }, [props.chat])

    // useEffect(() => {
    //     Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    //     Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    //     // cleanup function
    //     return () => {
    //       Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
    //       Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    //     };
    //   }, []);

    // const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
    // const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

    useEffect(() => {
        MiscHelper.enumerateDaysBetweenDates(props.selectedStartDate, props.selectedEndDate)
    }, [props.selectedStartDate, props.selectedEndDate])


    const itineraryPlan = useAppSelector(state => state.itinerary.itineraryPlan)

    useEffect(() => {
        setAllDataRanges()
    }, [])

    const filterByDate = (date: Date) => {
        setDataRanges(itineraryPlan.dateRanges?.filter((item: any) => item.date === date))
    }

    const setAllDataRanges = () => {
        setDataRanges(itineraryPlan.dateRanges)
    }
    
    const headerScroll = () => (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.itineraryTabHorizontalScroll}
        >
            <TouchableOpacity style={styles.dayComponent} onPress={() => setAllDataRanges()}>
                <Text>All</Text>
            </TouchableOpacity>
            {
                itineraryPlan.dateRanges && itineraryPlan.dateRanges.map((item: any, i: number) => (
                    <TouchableOpacity key={i} style={styles.dayComponent} onPress={() => filterByDate(item.date)}>
                        <Text>{item.date.toDateString()}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )

    const FirstRoute = (propsFirstRoute: any) => (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={dataRanges}
            style={styles.addPlaceScrollViewContainer}
            renderItem={({item, index}: any) => (
                <View key={index} style={styles.dateAndPlaceCard}>
                    <View>
                        <Text style={styles.dateText}>{item.date.toDateString()}</Text>
                    </View>
                    <View style={styles.addPlaceAllContentContainer}>
                        {
                            item.places && item.places.length > 0 ? item.places.map((place:any, index: number) => (
                                <CardGooglePlace {...place} addToPlanButton={false} removeFromPlanButton={true} />
                            ))
                            :
                            <View style={styles.addPlaceContainer}>
                                <TouchableOpacity style={styles.buttonPlus} onPress={() => propsFirstRoute.jumpTo('third')}>
                                    <IconAntd name="plus" size={12} color="#FFFFFF" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => propsFirstRoute.jumpTo('third')}>
                                    <Text style={styles.buttonText}>Add place to day</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>

                </View>
            )}
            ListHeaderComponent={headerScroll}
            keyExtractor={(item: any) => item.id}
        />
    );

    const actionButton = () => (
        <View style={styles.actionButtonContainer}>
            <TouchableOpacity style={styles.actionButton}>
                <IconIon name="image-outline" size={24} color={colour.orangePanorama} />
            </TouchableOpacity>
        </View>
    )

    const SecondRoute = (propsSecondRoute: any) => (
        // <View style={{ backgroundColor: '#ffffff', width: "100%" }}>
            <View style={styles.chatContainer}>


                <GiftedChat
                    renderTime={() => null}
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    isKeyboardInternallyHandled={true}
                    alwaysShowSend
                    user={{
                        _id: 12,
                        name: "Ju B"
                    }}
                    scrollToBottom
                    infiniteScroll
                    showUserAvatar={false}
                    showAvatarForEveryMessage={false}
                    renderActions={actionButton}
                    renderSend={props => (
                        <Send
                            {...props}
                            disabled={!props.text}
                            containerStyle={styles.sendButton}
                        >
                            <Text style={styles.sendTextStyle}>Send</Text>
                        </Send>
                    )}

                    renderComposer={props => {
                        return (
                            <View style={styles.textInputComposerContainer}>
                                <Composer
                                    {...props}
                                    multiline={true}
                                    textInputStyle={styles.textInputComposer}
                                />
                            </View>
                        )
                    }}
                    renderBubble={props => {
                        let username = props.currentMessage?.user.name
                        return(
                        <View>
                            {/* <Text style={styles.usernameStyle}>{props.currentMessage?.user.name}</Text> */}
                            <Bubble
                                {...props}
                                wrapperStyle={{
                                    left: username?.includes('TC') ? {...styles.bubbleLeftTC} : { ...styles.bubbleLeft },

                                    right: {
                                        ...styles.bubbleRight
                                    },
                                }}
                                textStyle={{
                                    left: {
                                        ...styles.textLeft
                                    },
                                    right: {
                                        ...styles.textRight
                                    }
                                }}
                            />
                        </View>
                        )
                    }}
                />
            </View>
    );


    const renderTabBar = (
        props: SceneRendererProps & { navigationState: State }
    ) => {
        return (
          <TabBar
            {...props}
            pressOpacity={0.8}
            onTabPress={(sceneProps) => props.jumpTo(sceneProps.route.key)}
            indicatorStyle={styles.tabBarIndicator}
            style={styles.tabBarContainer}
            renderLabel={({ route, focused, color }) => (
                    <Text 
                        style={ 
                            [
                                styles.tabBarText, focused ? { 
                                    color: colour.orangePanorama, fontWeight: '400'
                                } : {
                                    color: colour.grey100
                                }
                            ]
                        }
                    >
                        {route.title}
                    </Text>
              )}
          />
        );
    };

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: Explore
    });
{/* <SafeAreaView style={styles.container}></SafeAreaView> */}
    console.log()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageHeaderContainer}>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.screenTitle}>{itineraryPlan.tripTitle}</Text>
                <Text style={styles.screenDescription}>{itineraryPlan.selectedStartDate} - {itineraryPlan.selectedEndDate} • 5 members</Text>
            </View>
            <View style={styles.tabViewContainer}>
                <TabView
                    keyboardDismissMode="none"
                    renderScene = {renderScene}
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    initialLayout={styles.layoutTabView}
                    renderTabBar={renderTabBar}

                />
            </View>
        </SafeAreaView>
    )
}

export default ItineraryDetailPage
