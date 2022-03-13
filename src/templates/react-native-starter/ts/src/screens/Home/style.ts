import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: Platform.OS === "ios" ? 15 : 10,
        flexDirection: 'column',
        // alignSelf: 'center',
        // flexWrap: 'wrap'
    },
    travelAdviceContainer: {
        height: 206,
        backgroundColor: colour.black100,
        width: width * 0.8,
        alignSelf: 'center',
        paddingHorizontal: 28,
        paddingTop: spacing['40px'],
        borderRadius: 8,
    },
    travelAdviceText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center',
        color: colour.white,
        marginBottom: spacing['24px']
    },
    travelAdviceButton: {
        height: 37,
        backgroundColor: colour.orangePanorama,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    travelButtonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        color: colour.white
    },
    tripTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        marginLeft: spacing['16px']
    },
    tripBy: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: spacing['20px'],
        marginLeft: spacing['16px'],
        color: colour.grey100
    },
    imageListContainer:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    categoryButton: {
        margin: 10, 
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'center',
        width: 148, 
        height: 148, 
        borderRadius: 8,
    },
    categoryText: {
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: 'normal',
        textAlign: 'center'
    },
    topMenuBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 36,
    },
    topMenuIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red',
        width: width * 0.3,
        justifyContent: 'space-around'
    },
    userGreeting: {
        marginBottom: spacing['32px']
    },
    greetingText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['20px'],
        lineHeight: spacing['30px']
    },
    subGreetingText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px']
    },
    upcomingTripContainer: {
        marginBottom: spacing['32px']
    },
    titleText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        marginBottom: spacing['16px']
    },
    // overlay: {
    //     flex: 1
    // },
    // item: {
    //     padding: 10,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'flex-start',
    //     borderWidth: 0.2,
    //     borderRadius: 15
    // },
    // title: {
    //     fontSize: 11,
    // },
    // recentChat:{
    //     fontSize: 10,
    //     color: '#f8f8f8'
    // },
    // chatContainer: {
    //     paddingLeft: 5
    // },
    // avatarContainer: {
    //     paddingRight: 5,
    //     backgroundColor: "#f9f9f9",
    //     width: 40,
    //     height: 40,
    //     borderRadius: 40/2
    // }
})

export default styles;