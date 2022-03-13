import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    screenTitleContainer: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['48px'],
        marginBottom: spacing['16px']
    },
    screenTitleText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
    },
    itineraryCard: {
        height: 144,
        width: width - 64,
        marginBottom: spacing['24px']
    },
    contentContainer: {
        alignItems: 'center',
    },
    tripName: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color: colour.white
    },
    members: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: colour.white
    },
    tripSummary: {
        height: "100%",
        justifyContent: 'flex-end',
        backgroundColor: "#000000a0",
        paddingBottom: spacing['16px'],
        paddingLeft: spacing['16px'],
        borderRadius: 8
    },
    headerComponent: {
        alignSelf: 'flex-start',
        marginBottom: spacing['16px']
    },
    categoryOptionContainer: {
        flexDirection: 'row',
        paddingHorizontal: spacing['32px']
    },
    buttonStyle: {
        height: 37,
        backgroundColor: colour.orangePanorama,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginRight: spacing['8px']
    },
    headerContent: {
        width: width,
        marginBottom: spacing['24px']
    },
    buttonSecondStyle: {
        height: 37,
        backgroundColor: colour.orange200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        marginRight: spacing['8px'],
    },
    buttonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        color: colour.white
    },
    buttonTextAlt: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 21,
        color: colour.orangePanorama
    },
    floatingButton: {
        backgroundColor: colour.orangePanorama,
        width: 56,
        height: 56,
        borderRadius: 56 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: height * 0.05,
        position: 'absolute',
        right: 32
    },
    floatingOptions: {
        backgroundColor: colour.white,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: height * 0.05,
        right: 32,
        height: 44,
        marginBottom: 10,
        borderRadius: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        position: 'absolute',
    },
    textOption: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,

    },
    optionLogo: {
        marginHorizontal: 8
    },
    floatingButtonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // paddingHorizontal: spacing['32px'],
        flexDirection: 'column',
        zIndex: 2,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.4)',
      },
    modalView: {
        backgroundColor: colour.white,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: width
      },
    modalHeader: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        paddingHorizontal: spacing['32px'],
        alignItems: 'center',
        marginBottom: spacing['24px']
    },
    modalTitle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
    },
    closeModalText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: colour.orangePanorama
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
    confirmButton: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colour.orangeDisable,
        borderRadius: 8,
        paddingHorizontal: spacing['32px']
    },
    confirmText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: colour.white
    },
    modalFooter: {
        // backgroundColor: 'red',
        width: width,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['16px']
    },

    fadingContainer: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: 'absolute',
        height: height,
        zIndex: 1,
        width: width
    },
    fadingText: {
        fontSize: 28
    },
})

export default styles;