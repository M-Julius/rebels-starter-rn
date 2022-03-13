import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 40 : 0,
    },
    titleScreen: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['24px'],
        lineHeight: font['32px'],
    },
    titleScreenContainer: {
        marginTop: spacing['32px'],
        marginBottom: spacing['16px'],
        paddingHorizontal: spacing['32px']
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
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        marginBottom: spacing['8px']
    },
    description: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        marginBottom: spacing['8px']
    },
    timestamp: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: 18,
    },
    notificationCard: {
        paddingHorizontal: spacing['32px'],
        paddingTop: spacing['32px'],
        // backgroundColor: colour.orange200,
    },
    notificationWrapper: {
        borderBottomColor: colour.grey100,
        borderBottomWidth: 0.2,
        paddingBottom: spacing['32px']
    },
})

export default styles;