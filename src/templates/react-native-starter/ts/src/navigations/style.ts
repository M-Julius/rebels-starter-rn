import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, spacing } from '../styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    bottomTabStyle: {
        shadowColor: colour.black100,
        shadowOffset: { width: 10, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 10,  
        elevation: 5,
        height: 76
    },
    titleStyle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 24
    }
})

export default styles;