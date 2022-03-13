import { Dimensions, StyleSheet } from 'react-native';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        // height: 211,
        // width: 211,
        // borderRadius: 211/2
    }
})

export default styles;