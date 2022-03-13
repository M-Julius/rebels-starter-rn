import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { colour, spacing } from '../../styles';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: Platform.OS === 'ios' ? (StatusBar.currentHeight ? StatusBar.currentHeight : 0): 0,
    },
    dotsContainer: { 
        flexDirection: 'row',
        width: '40%',
        bottom: spacing['48px'],
        left: width * 0.1,
    },
    dots: { 
        height: 10, 
        backgroundColor: colour.orangePanorama, 
        margin: 2, 
        borderRadius: 5,
    },
})

export default styles;