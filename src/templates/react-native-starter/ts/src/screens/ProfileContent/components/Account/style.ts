import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    inputLabel: {
        color: colour.grey100,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: 18,
        marginBottom: 10
    },
    boldOrange: {
        fontWeight: '700',
        color: colour.orangePanorama,

    },
    editBtn: {
        color: colour.orangePanorama,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: font['14px'],
        lineHeight: 21,

    },
    textNumber: {
        color: colour.grey100,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: font['14px'],
        lineHeight: 21,
    },
    boxStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey100,
        height: 45,
        // paddingLeft: 20,
    },
    boxStyleAlt: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey100,
        height: 45,
        // paddingLeft: spacing['48px'],
        fontSize: font['14px']
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
        // paddingHorizontal: spacing['32px'],

        // marginTop: spacing['24px']
    },
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
        marginBottom: 16,

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
    contentRightImage: {
        flexDirection: 'row',
        alignItems: 'center'
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
        fontWeight: '400',
        fontSize: font['14px'],
        lineHeight: spacing['21px'],
        color: colour.black100
    },
    imgAtm: {
        marginHorizontal: spacing['8px'],
    },
    tripStatus: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: font['14px'],
        lineHeight: spacing['21px'],
        color: colour.orangePanorama
    },

    nominalAccount: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        color: colour.black100
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
    contentContainer: {
        padding: spacing['32px']

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
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 21,
        // paddingBottom: spacing['12px']
    },
    orderHead: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        paddingBottom: spacing['4px'],
        color: colour.black100,
    },
    infoBankContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing['16px']
    },
    infoCopy: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing['24px'],
        paddingVertical: spacing['12px'],
        backgroundColor: colour.greyBg,
        borderRadius: 8
    },
    nominalContainer: {
        marginTop: spacing['32px'],
        marginBottom: spacing['48px']
    },
    imgCustom: {
        width: 66,
        height: 20
    },
    m16: {
        marginRight: spacing['16px'],
    },
    bold: {
        fontWeight: '700',
    },
    btnCopy: {
        paddingHorizontal: spacing['12px'],
        paddingVertical: spacing['4px'],
        borderColor: colour.orangePanorama,
        borderWidth: 1,
        borderRadius: 8
        // backgroundColor: colour.black100
    },
    btnChange: {
        borderColor: colour.orangePanorama,
        borderWidth: 1,
    },
    padTotal: {
        marginTop: spacing['24px'],
        marginBottom: spacing['8px'],
    },
    m: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: colour.black100,
    },
    orange: {
        color: colour.orangePanorama
    },
    xs: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: colour.black100,
    },
    orderSub: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 21,
        color: colour.black100
    },
    orderBold: {
        fontStyle: 'normal',
        fontWeight: '700',
    },
    bankName: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        color: colour.black100,
        marginBottom: spacing['6px']
    },
    orderDesc: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        color: colour.black100,
    },
    description: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        color: colour.gray,
    },
    screenHeaderContainer: {
        backgroundColor: colour.yellow ,
        marginTop: spacing['16px'],
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: spacing['8px']
    },
    orderTitle: {
        // paddingHorizontal: spacing['32px'],
        paddingTop: spacing['16px']
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