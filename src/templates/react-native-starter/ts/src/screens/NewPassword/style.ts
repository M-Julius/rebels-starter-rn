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
        // bottom: height * 0.25,
        width: width,
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['36px']
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
    screenTitlteContainer: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['32px'],
        marginBottom: spacing['32px']
    },
    screenTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['24px'],
        lineHeight: spacing['36px'],
        marginBottom: spacing['8px']
    },
    screenDescription: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
    },
    inputLabel: {
        color: colour.grey100,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: 18,
        marginBottom: 8
    },
    boxStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey100,
        height: 45,
        paddingLeft: 20,
    },
    wrapperInput: {
        width: width * 0.8,
        // marginBottom: 10
    },
    textInputFocus: {
        borderColor: colour.orangePanorama,
    },
    textInputBlur: {
        borderColor: colour.grey100
    },
    inputContainer: {
        alignItems: 'center',
        marginBottom: spacing['32px']
    },
    bottomContainer: {
        width: width,
        alignItems: 'center',
    },
    buttonTouch: {
        borderRadius: 8,
        height: spacing['40px'],
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 80,
        // paddingHorizontal: 60,
        flexDirection: 'row',
    },
    buttonTouchText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.white,
    },
})

export default styles;