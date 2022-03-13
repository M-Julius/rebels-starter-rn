import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 40 : 0,
        flex: 1,
        backgroundColor: colour.white
    },
    topnav: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        paddingTop: spacing['48px'],
        marginBottom: spacing['32px']
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
        fontSize: font['24px'],
        lineHeight: spacing['36px'],
        marginBottom: 4
    },
    subTitle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
    },
    titleContainer: {
        paddingHorizontal: spacing['32px'],
        marginBottom: spacing['36px']
    },
    calendarContainer: {
        paddingHorizontal: 32,
        marginBottom: spacing['48px']
    },
    customArrowContainer: {
        width: 24,
        height: 24,
        backgroundColor: colour.orange200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24 / 2
    },
    tripSummaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing['32px']
    },
    tripSummaryText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width * 0.5
    },
    dateText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
    },
    tripNameText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
    }
})

export default styles;