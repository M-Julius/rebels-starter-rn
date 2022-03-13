import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { normal } from '../../../../const/Metrics';
import { colour, font, spacing } from '../../../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'column',
        width: width,
        // height: height,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    topContainer: {
        width: width,
        flex: 0.5,
        flexDirection: 'column',
    },
    bottomContainer: {
        width: width,
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
        // backgroundColor: 'grey'
    },
    textSection: {
        justifyContent: 'center',
        paddingLeft: spacing['32px'],
        paddingRight: spacing['32px'],
        marginTop: spacing['64px'],

    },
    navigationSection: {
        width: width,
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        flexDirection: 'row',
        marginBottom: spacing['24px'],
        // zIndex: 3
        // bottom: spacing['24px']
    },
    boardTitle: {
        fontSize: font['24px'],
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: spacing['36px'],
        marginBottom: spacing['8px']
    },
    boardDescription: {
        fontSize: font['16px'],
        fontStyle: 'normal',
        lineHeight: spacing['24px'],
        marginTop: spacing['8px']
    },
    button: {
        borderRadius: 8,
        backgroundColor: colour.orangePanorama,
        height: spacing['32px'],
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing['24px']
    },
    img: {
        width: width,
        height: height / 2,
        position: 'absolute'
    },
    skipText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
    },
    skipButton: {
        alignSelf: 'flex-end',
        marginRight: spacing['32px'],
        marginTop: spacing['32px'],
    }
})

export default styles;