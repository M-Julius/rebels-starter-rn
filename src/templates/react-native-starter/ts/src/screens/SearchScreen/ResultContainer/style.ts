import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../../styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    textInput: {
        color: '#5d5d5d',
        fontSize: 16,
        borderColor: colour.grey50,
        borderWidth: 1,
        borderRadius: 8,
        height: 45,
        paddingLeft: 16
    },
    resultContainerStyle: {
        paddingTop: spacing['32px'],
        // paddingBottom: spacing['56px'],
        height: height,
    },
    optionListStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        marginBottom: spacing['16px']
    },
    
})

export default styles;