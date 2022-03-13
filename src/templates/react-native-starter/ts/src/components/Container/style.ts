import { Dimensions, StyleSheet } from 'react-native';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        alignItems: 'center',
        justifyContent: 'center'
    }   
})

export default styles;