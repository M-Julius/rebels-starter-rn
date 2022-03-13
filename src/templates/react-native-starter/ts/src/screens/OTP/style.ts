import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 40 : 0,
    },
    topnav: {
        // backgroundColor: "grey",
        top: height * 0.05,
        width: width,
        // flex: 0.,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px']
    },
    title: {
        flexDirection: 'column',
        width: width,
        top: height * 0.1,
        // flex: 0.1,
        paddingHorizontal: spacing['32px'],
        justifyContent: 'center'
    },
    titleText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['24px'],
        lineHeight: spacing['36px'],
        color: colour.black100
    },
    subTitleText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px']
    },
    subTitleTextPhoneNumber: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.orangePanorama
    },
    form: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // justifyContent: 'space-evenly',
        top: height * 0.15,
    },
    bottomContainer: {
        flexDirection: 'row',
        top: height * 0.2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: spacing['32px']
    },
    // buttonWrapper: {},
    buttonTouch:{},
    questionText: {
        color: colour.black100,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: spacing['20px']
    },
    buttonTouchText: {
        color: colour.orangePanorama,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['14px'],
        lineHeight: spacing['20px']
    },
    otpContainer: {
        backgroundColor: colour.orange200,
        borderRadius: 8,
        width: 61,
        height: 61,
        textAlign: 'center',
        fontSize: font['32px'],
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: colour.orangePanorama
        // lineHeight: spacing['48px']
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    backText: {
        fontStyle: 'normal',
        fontWeight: "600",
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        marginLeft: 10
    },
})

export default styles;