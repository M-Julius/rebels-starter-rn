import { Dimensions, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // marginBottom: 18
        // justifyContent: 'flex-start',
    },
    topnav: {
        // backgroundColor: "grey",
        // flex: 0.1,
        // top: height * 0.08,
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        marginBottom: 32
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
    title: {
        flexDirection: 'column',
        width: width,
        // top: height * 0.1,
        // flex: 0.15,
        paddingHorizontal: 32,
        justifyContent: 'flex-end'
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
        fontSize: 14,
        lineHeight: 21,
        color: colour.black100
    },
    form: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // top: height * 0.12,
        // flex: 0.55,
    },
    bottomContainer: {
        width: width,
        // flex: 0.15,
        // top: height * 0.13,
        alignItems: 'center',
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
        paddingLeft: 20
    },
    wrapperInput: {
        width: width - 64,
        marginBottom: 10
    },
    buttonWrapper: {
        // backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing['8px'],
        marginTop: spacing['32px']
    },
    buttonTouch: {
        // backgroundColor: colour.orangePanorama,
        borderRadius: 8,
        height: spacing['40px'],
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 64
        // paddingHorizontal: 80
    },
    buttonTouchText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.white
    },
    textAgreementWrapper: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    termsAndCondition: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['12px'],
        lineHeight: 18,
        color: colour.orangePanorama
    },
    privacyStatement: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['12px'],
        lineHeight: 18,
        color: colour.orangePanorama
    },
    textAgreement: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: 18
    },
    textInputFocus: {
        borderColor: colour.orangePanorama,
    },
    textInputBlur: {
        borderColor: colour.grey100
    },
    textAgreementButtonContainer: {
        flexDirection: 'row'
    }
})

export default styles;