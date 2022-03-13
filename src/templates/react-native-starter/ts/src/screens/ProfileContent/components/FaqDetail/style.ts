import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    customCard: {
        // backgroundColor: colour.white,
        // width: width,
        height: height * 0.2,
        // width: width * 0.85,
        // flex: 1,
        // paddingVertical: spacing['24px'],
        // paddingLeft: spacing['32px'],
        // paddingRight: spacing['32px']
        marginBottom: spacing['24px'],
        borderRadius: 8,
        // overflow: 'hidden',

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.30,
        // shadowRadius: 4.65,

        shadowColor: colour.black4,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 20},
        shadowRadius: 300,
        elevation: 4,
        backgroundColor: colour.white,


        // elevation: 4,
        // zIndex: 5
    },
    // viewContainer: {
    //     marginBottom: 20,
    // },
    cardContainer: {
        height: '100%',
        // backgroundColor: "black",
        padding: spacing['16px'],
        justifyContent: 'space-between',
        // borderRadius: 10,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    tripSummary: {
        // height: "100%",
        // justifyContent: 'flex-end',
        // paddingBottom: spacing['16px'],
        // paddingLeft: spacing['16px']
        borderRadius: 8,
        paddingHorizontal: spacing['24px'],
        paddingVertical: spacing['8px'],
        backgroundColor: colour.orange200,
    },
    tripName: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        color: colour.black100
    },
    tripStatus: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: font['14px'],
        lineHeight: spacing['21px'],
        color: colour.orangePanorama
    },
    tripCode: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.black100
    },
    tripDate: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        color: colour.black100
    },
    titleUpcoming: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.black100,
        marginBottom: spacing['16px']
    },
    customCardContainer: {
        // borderRadius: 8,
        paddingHorizontal: spacing['32px'],
        paddingTop: spacing['12px']
    },
    upcomingTripContainer: {
        marginBottom: spacing['32px']
    },

    topnav: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['24px']
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
    screenTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
        paddingBottom: spacing['12px']
    },
    description: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
    },
    screenHeaderContainer: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['32px']
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
    boxStyleAlt: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey100,
        height: 45,
        paddingLeft: 30,
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
    form: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['24px']
    },
    confirmButton: {
        backgroundColor: colour.orangePanorama,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 8
    },
    confirmText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: colour.white
    }
})

export default styles;