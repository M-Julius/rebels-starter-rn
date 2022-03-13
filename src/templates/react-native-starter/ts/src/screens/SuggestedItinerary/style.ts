import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colour, font, spacing } from '../../styles';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 40 : 0,
        flex: 1,
        backgroundColor: colour.white
    },
    optionListStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        marginBottom: spacing['16px']
    },
    sheet: {
        position: "absolute",
        top: height * 0.9,
        left: 0,
        right: 0,
        height: "100%",
        // width: "100%"
        // justifyContent: "flex-end",
    },
    popup: {
        backgroundColor: "#FFF",
        minHeight: 90,
        alignItems: "center",
        justifyContent: "center",
    },    
    topImageContainer: {
        width: width,
        height: 200,
        backgroundColor: colour.grey100,
        marginBottom: spacing['16px']
    },
    textContainer: {
        marginBottom: spacing['32px'],
        paddingHorizontal: spacing['32px']
    },
    titleStyle: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        marginBottom: spacing['16px']
    },
    descriptionStyle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: spacing['20px'],
    },
    dayListContainer: {
        paddingLeft: spacing['32px'],
    },
    dayComponentStyle: {
        backgroundColor: colour.orange200,
        height: 29,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: spacing['8px'],
        borderRadius: 8,
        width: 57
    },
    dayComponentText: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: font['14px'],
        lineHeight: 21,
        color: colour.orangePanorama
    },
    tripItem: {
        flexDirection: 'row',
        paddingHorizontal: spacing['32px'],
        marginBottom: spacing['16px']
    },
    imgContainer: {
        marginRight: spacing['16px'],
        width: 80,
        height: 80,
        borderRadius: 8
    },
    category: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['10px'],
        lineHeight: spacing['16px'],
        borderWidth: 1,
        borderRadius: 8,
        height: spacing['20px'],
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 4
    },
    categoryContainer: {
        // borderWidth: 1,
        borderRadius: 8,
        height: spacing['20px'],
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
        marginLeft: spacing['8px']
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',

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
    divider: {
        borderWidth: 1, 
        borderColor: colour.grey50,
        marginVertical: spacing['16px']
    },
    dayText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: font['20px'],
        lineHeight: spacing['30px'],
        paddingHorizontal: spacing['32px'],
        marginBottom: spacing['16px']
    }
})

export default styles;