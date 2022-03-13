import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    contentBottom: {
        paddingHorizontal: spacing['32px'],
        paddingVertical: spacing['32px'],
        backgroundColor: colour.white,
        // marginTop: 8,
    },
    contentTextBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: spacing['24px']
    },
    textBottomLeft: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.black100
    },
    textBottomRight: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.black100
    },
    buttonWrapper: {
        // backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,

    },
    buttonTouch: {
        // backgroundColor: colour.orangePanorama,
        borderRadius: 8,
        // height: spacing['40px'],
        alignItems: 'center',
        justifyContent: 'center',
        width: width - 64,
        paddingVertical: 8,

        flexDirection: 'row'
        // paddingHorizontal: 80
    },
    buttonTouchText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.white
    },
    noBorderLine: {

    },
    borderLine: {
        width: 'auto',
        borderBottomWidth :1,
        borderBottomColor: colour.grey50,
    },
    customCard: {
        // backgroundColor: colour.white,
        // width: width,
        // height: height * 0.2,
        // width: width * 0.85,
        // flex: 1,
        // paddingVertical: spacing['24px'],
        // paddingLeft: spacing['32px'],
        // paddingRight: spacing['32px']
        // marginBottom: spacing['24px'],
        borderRadius: 8,
        // overflow: 'hidden',

        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.30,
        // shadowRadius: 4.65,

        // elevation: 4,
        // zIndex: 5
    },
    // viewContainer: {
    //     marginBottom: 20,
    // },
    cardContainer: {
        paddingVertical: spacing['24px'],
        // height: '100%',
        // padding: spacing['16px'],
        justifyContent: 'space-between',
        // borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        flexDirection: 'row'
    },
    contentLeft: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentLeftImage: {
        marginRight:12,
        height:24,
        width: 24,
        borderRadius: 24/2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colour.orange200
    },
    contentImageBtn: {
        marginRight:12,
        // height:24,
        // width: 24,
        // borderRadius: 24/2,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: colour.orange200
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
        fontWeight: '700',
        fontSize: font['14px'],
        lineHeight: spacing['21px'],
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
        fontSize: font['12px'],
        lineHeight: spacing['18px'],
        color: colour.black100
    },
    tripPrice: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: font['14px'],
        lineHeight: spacing['21px'],
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
        // height: '100%',
        backgroundColor: colour.white,

        paddingHorizontal: spacing['32px'],
        paddingTop: spacing['12px']
    },
    upcomingTripContainer: {
        marginBottom: spacing['32px']
    },

    topnav: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['24px'],
        flexDirection: 'row',

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
    orderHead: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30,
        paddingBottom: spacing['4px']
    },
    orderSub: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
    },
    orderBold: {
        fontStyle: 'normal',
        fontWeight: '700',
    },
    description: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: colour.gray,
    },
    screenHeaderContainer: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['32px'],
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    orderTitle: {
        paddingHorizontal: spacing['32px'],

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