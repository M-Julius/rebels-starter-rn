import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 40 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    panoramaLogoContainer: {
        paddingLeft: spacing['32px'],
        marginBottom: spacing['16px']
    },
    title: {
        flexDirection: 'column',
        width: width,
        paddingHorizontal: 32,
        justifyContent: 'center',
        marginBottom: spacing['32px']
    },
    titleText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.black100
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    bottomContainer: {
        width: width,
        alignItems: 'center',
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
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
    buttonTouch: {
        borderRadius: 8,
        height: spacing['40px'],
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: width - 64
    },
    buttonTouchText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.white,
        marginLeft: 10
    },
    inputLabel: {
        color: colour.grey100,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: 18,
        marginBottom: 10
    },
    boxStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey100,
        height: 45,
        paddingLeft: 20,
    },
    wrapperInput: {
        width: width - 64,
        marginBottom: 10
    },
    textInputFocus: {
        borderColor: colour.orangePanorama,
    },
    textInputBlur: {
        borderColor: colour.grey100
    },
    forgotPassContainer: {
        paddingLeft: spacing['32px'],
        marginTop: spacing['16px']
    },
    forgotPassText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    accountRegisterText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 21,
    },
    accountRegisterBtn: {
        color: colour.orangePanorama
    },
    accountRegisterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing['32px']
    },
    divider: {
        borderBottomWidth: 0.2,
        borderBottomColor: colour.grey100,
        marginHorizontal: spacing['32px'],
        marginTop: spacing['32px']
    }
})

export default styles;