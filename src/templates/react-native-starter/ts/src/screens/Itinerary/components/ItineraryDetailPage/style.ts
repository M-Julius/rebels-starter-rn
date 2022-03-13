import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';
import {Fonts} from '../../../../const/index'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    imageHeaderContainer: {
        backgroundColor: colour.grey100,
        width: width,
        height: 200
    },
    screenTitle: {
        // fontFamily: 'Manrope-Regular',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
    },
    screenDescription: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    titleContainer: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['16px'],
        marginBottom: spacing['32px']
    },
    layoutTabView: {
        width: width,
        height: 240,
        position: 'absolute',
        // flex: 1
    },
    tabViewContainer: {
        width: '100%',
        height: height * .59,
        flex: 1
    },
    tabBarIndicator: {
        backgroundColor: colour.orangePanorama,
    },
    tabBarContainer: {
        backgroundColor: colour.white,
    },
    tabBarText: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: font['16px'],
        color: '#414141'
    },
    itineraryTabHorizontalScroll: {
        height: 70,
        width: width,
        paddingLeft: spacing['32px'],
        alignItems: 'center',
    },
    dayComponent: {
        backgroundColor: colour.orangeDisable,
        marginRight: 10,
        borderRadius: 8,
        padding: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dateAndPlaceCard: {
        paddingHorizontal: spacing['32px'],
        marginBottom: spacing['24px']
    },
    dateText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color: colour.black100
    },
    addPlaceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonPlus: {
        backgroundColor: colour.orangePanorama,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20 /2,
        marginRight: spacing['16px']
    },
    buttonText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: colour.orangePanorama
    },

    imageListContainer:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
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
    midSectionTitleContainer: {
        // paddingLeft: spacing['16px'],
    },
    midSectionTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
    },
    midSectionContainer: {
        paddingHorizontal: spacing['32px'],
        paddingBottom: height * 1.5
    },
    viewAllSuggested: {
        borderWidth: 0.5,
        borderColor: colour.orangePanorama,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: width - 64,
        marginTop: spacing['24px'],
        borderRadius: 8
    },
    viewAllSuggestedText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: colour.orangePanorama
    },
    topSectionTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        marginBottom: spacing['16px']
    },
    topSectionContainer: {
        marginTop: spacing['32px']
    },
    tripItem: {
        flexDirection: 'row',
        // paddingHorizontal: spacing['32px'],
        marginBottom: spacing['16px']
    },
    imgContainer: {
        marginRight: spacing['16px'],
        width: 80,
        height: 80,
        borderRadius: 8
    },
    category: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['10px'],
        lineHeight: spacing['16px'],
        borderWidth: 1,
        borderRadius: 8,
        height: spacing['20px'],
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4
    },
    categoryContainer: {
        // borderWidth: 1,
        borderRadius: 8,
        height: spacing['20px'],
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 4,
        // width: width * 0.2
    },
    name: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        marginBottom: 4
    },
    review: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: spacing['20px'],
        marginLeft: spacing['8px']
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    addToPlanBtn: {
        width: 28,
        height: 28,
        backgroundColor: colour.white,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 8,
        marginRight: spacing['8px'],
        marginTop: spacing['8px']
    },
    searchLabel: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,
        marginBottom: spacing['8px'],
        color: colour.grey100
    },
    searchLabelContainer:{
        marginTop: spacing['24px']
    },
    optionListStyle: {
        fontFamily: Fonts.mrRegular,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        marginBottom: spacing['16px']
    },
    container: {
        backgroundColor: colour.white,
        flex: 1,

    },
    chatContainer: {
        height: Platform.OS === 'ios' ? height - height * 0.5 : height - height * 0.45,
        // backgroundColor: colour.grey100,
        width: width,
        flex: 1
    },
    bubbleRight: {
        backgroundColor: colour.orange200,
        borderRadius: 8,
        padding: 8
    },
    bubbleLeft: {
        borderRadius: 8,
        padding: 8,
        backgroundColor: "#F5F5F5"
    },
    bubbleLeftTC: {
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'rgba(245, 130, 32, 0.48);'
    },
    textRight: {
        color: colour.black100,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,
    },
    textLeft: {
        color: colour.black100,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,
    },
    usernameStyle: {
        color: colour.black100,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 4,
    },
    actionButtonContainer:{
        // backgroundColor: colour.grey50,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        backgroundColor: colour.orange200,
        height: 32,
        width: 32,
        borderRadius: 32/ 2,
        marginLeft: spacing['32px'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputComposer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        paddingTop: 8.5,
        width: width * 0.7,
        paddingRight: 45
    },
    textInputComposerContainer: {
        width: width * 0.7,
        // backgroundColor: colour.grey50,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: 44,
    },
    sendButton: {
        width: 44,
        height: 44,
        // backgroundColor: colour.grey100,
        marginHorizontal: 4,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 45

    },
    sendTextStyle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        color: colour.grey100
    },
    searchBoxStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey50,
        height: 45,
        paddingLeft: 20,
        marginTop: 8
    },
    addPlaceScrollViewContainer: {
        // backgroundColor: colour.grey100,
        height: height * 2,
    },
    addPlaceAllContentContainer: {
        flexDirection: 'column',
        marginTop: spacing['18px']
    },
    // dateContainer: {
    //     marginBottom
    // }
})

export default styles;