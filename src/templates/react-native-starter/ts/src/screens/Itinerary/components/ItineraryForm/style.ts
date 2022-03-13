import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

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
        paddingLeft: spacing['48px'],
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
    },
    addFriendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing['48px'],
        marginTop: spacing['16px']
    },
    addFriendIcon: {
        width: 18,
        height: 18,
        marginRight: 10
    },
    addFriendText: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
    },
    addFriendBoxStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colour.grey100,
        height: 45,
        paddingLeft: 20,
        marginTop: 8
    },
})

export default styles;