import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    topnav: {
        width: width,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingHorizontal: spacing['32px'],
        marginTop: spacing['32px']
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
    searchContainer: {
        marginTop: spacing['32px'],
        paddingHorizontal: spacing['32px'],
        height: height,
    },
    searchText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 18,
        color: colour.grey100,
        marginBottom: spacing['8px']
    },
    textInput: {
        color: '#5d5d5d',
        fontSize: 16,
        borderColor: colour.grey50,
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        paddingLeft: 16
    },
    
})

export default styles;