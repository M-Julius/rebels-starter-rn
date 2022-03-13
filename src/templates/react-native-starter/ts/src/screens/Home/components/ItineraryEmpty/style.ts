import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../../styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    customCard: {
        height: 239,
        flex: 1,
        marginBottom: spacing['32px'],
        borderRadius: 8,
    },
    imageBackground: {
        height: 239,
        alignItems: 'center',
        justifyContent: "center",
        // borderRadius: 80,
        // flex: 1,
        resizeMode: "cover",
        width: width * 0.85
    },
    imageContentStyle: {
        height: 239,
        width: width * 0.85,
        alignItems: 'center',
        paddingTop: spacing['32px'],
        backgroundColor: "#000000a0"
    },
    title: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['24px'],
        lineHeight: spacing['36px'],
        color: colour.white,
        marginBottom: spacing['8px'],
        textAlign: 'center',
        marginHorizontal: spacing['24px']
    },
    subTitle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        color: colour.white,
        marginBottom: spacing['16px'],
        textAlign: 'center',
        marginHorizontal: spacing['32px']

    },
    buttonStyle: {
        borderRadius: 8,
        backgroundColor: colour.orangePanorama,
        alignItems: 'center',
        justifyContent: 'center',
        height: 37,
        width: 279,
    },
    buttonText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        color: colour.white
    }
})

export default styles;