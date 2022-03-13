import { Dimensions, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'flex-start',
    },
    topnav: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['48px']
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
        width: width,
        paddingHorizontal: 32,
        justifyContent: 'flex-end',
        marginTop: spacing['32px']
    },
    titleText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['24px'],
        lineHeight: spacing['36px'],
        color: colour.black100
    },
    subTitleText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
        color: colour.black100
    },
    bottomContainer: {
        width: width,
        // flex: 0.15,
        top: height * 0.13,
        alignItems: 'center',
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
        paddingLeft: 20
    },
    wrapperInput: {
        width: width - 64,
        marginBottom: 10
    },
    buttonWrapper: {
        // backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    textInputFocus: {
        borderColor: colour.orangePanorama,
    },
    textInputBlur: {
        borderColor: colour.grey100
    },
    formContainer: {
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['32px']
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: colour.grey50,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor:colour.grey100,
        paddingBottom: spacing['16px'],
        paddingTop: spacing['16px']
    },
    optionContainerAlt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: spacing['16px'],
        paddingTop: spacing['16px']
    },
    optionText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24,
    },
    versionContainer: {
        paddingHorizontal: spacing['32px'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    versionText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,
    }
})

export default styles;