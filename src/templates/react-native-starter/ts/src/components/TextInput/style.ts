import { Dimensions, StyleSheet } from 'react-native';
import { spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // width: "100%",
        // backgroundColor: "red",
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    iconStyle: {
        alignSelf: 'flex-end',
        bottom: 32,
        // width: "100%",
        paddingRight: 10,
        // height: "100%",
        // position: 'absolute',
        // backgroundColor: "red"
        // justifyContent: 'flex-start',

    },
    leftIconStyle: {
        alignSelf: 'flex-start',
        bottom: 32,
        // width: "100%",
        paddingLeft: spacing['18px'],
    }
})

export default styles;