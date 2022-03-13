import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    customCard: {
        backgroundColor: colour.grey100,
        height: height * 0.2,
        width: width * 0.85,
        flex: 1,
    },
    customCardContainer: {
        borderRadius: 8,
    },
    titleUpcoming: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['16px'],
        lineHeight: spacing['24px'],
        color: colour.black100,
        marginBottom: spacing['16px']
    },
    imageBg: {
        width: width,
        height: height * 0.2,
        // backgroundColor: "black",
        justifyContent: 'flex-end',
    },
    tripName: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        color: colour.white
    },
    tripDate: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        color: colour.white
    },
    tripSummary: {
        height: "100%",
        justifyContent: 'flex-end',
        backgroundColor: "#000000a0",
        paddingBottom: spacing['16px'],
        paddingLeft: spacing['16px']
    }
})

export default styles;