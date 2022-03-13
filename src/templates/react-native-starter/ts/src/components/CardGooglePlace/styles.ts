import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../const';
import { colour, font, spacing } from '../../styles';
// import { colour } from '@styles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    tripItem: {
        flexDirection: 'row',
        // paddingHorizontal: spacing['32px'],
        marginBottom: spacing['16px']
    },
    imgContainer: {
        marginRight: spacing['16px'],
        width: 80,
        height: 80,
        borderRadius: 8
    },
    addToPlanBtn: {
        width: 28,
        height: 28,
        backgroundColor: colour.white,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: 8,
        marginRight: spacing['8px'],
        marginTop: spacing['8px']
    },
    typeOfPlaceBox:{
        borderWidth: 1,
        borderRadius: 8,
        height: 23,
        paddingHorizontal: spacing['8px'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    category: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['10px'],
        lineHeight: spacing['16px'],
        textTransform: 'capitalize'
        // padding: 8
    },
    categoryContainer: {
        // borderWidth: 1,
        borderRadius: 8,
        height: 23,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 4,
        // width: width * 0.2
    },
    name: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
        marginBottom: 4
    },
    review: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: spacing['20px'],
        marginLeft: spacing['4px']
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    totalRatings: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['12px'],
        lineHeight: spacing['20px'],
        marginLeft: spacing['4px'],
        marginRight: spacing['4px']
    }
})

export default styles;