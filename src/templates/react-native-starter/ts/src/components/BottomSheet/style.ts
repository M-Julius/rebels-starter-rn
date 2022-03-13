import { Dimensions, StyleSheet } from 'react-native';
import { font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backButtonStyle: {
        marginRight: spacing['20px']
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    modalNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: spacing['24px']
    },
    titleText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
    },
    modal: {
        backgroundColor: "#FFFFFF",
        // paddingTop: 12,
        paddingBottom: spacing['24px'],
        paddingHorizontal: spacing['32px']

    },
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
})

export default styles;