import React, { RefObject, useRef } from 'react'
import { ScrollView, View, Animated, Dimensions , TouchableOpacity, Text, SafeAreaView} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Board from './components/Board'
import styles from './style'

const { width } = Dimensions.get('window');

interface Props {
    
}

const OnBoarding = (props: Props) => {

    const BOARD_DATA = [
        {
            img_src: 'https://www.englishcafe.co.id/wp-content/uploads/2017/12/travelling.jpg',
            title: 'Morbi turpis fermentum consectetur vitae cursus.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae, laoreet sed a turpis diam, scelerisque habitant.',
            buttonText: 'Next',
            key: 1,
            skipText: 'Skip',
        },
        {
            img_src: 'https://www.englishcafe.co.id/wp-content/uploads/2017/12/travelling.jpg',
            title: 'Morbi turpis fermentum consectetur vitae cursus.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae, laoreet sed a turpis diam, scelerisque habitant.',
            buttonText: 'Next',
            key: 2,
            skipText: 'Skip'
        },
        {
            img_src: 'https://www.thestatesman.com/wp-content/uploads/2019/09/iStock-843542714.jpg',
            title: 'Morbi turpis fermentum consectetur vitae cursus.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae, laoreet sed a turpis diam, scelerisque habitant.',
            buttonText: 'Get Started',
            key: 3
        }
    ]
    
    let scrollX = new Animated.Value(0)

    let position = Animated.divide(scrollX, width);

    let scroll = useRef<ScrollView | null>(null)

    const onPressButton = (key: number) => {
        if(key === 3){  
            Actions.replace('signin')
        }else{
            scroll.current?.scrollTo({ x: width * key, y: 0, animated: true })
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView 
                    ref={scroll}
                    bounces={false}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={Dimensions.get("window").width}
                    snapToAlignment="center"
                    indicatorStyle="black"
                    pagingEnabled
                    decelerationRate={0}
                    onScroll={Animated.event( // Animated.event returns a function that takes an array where the first element...
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],{useNativeDriver: false} // ... is an object that maps any nativeEvent prop to a variable
                    )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
                    scrollEventThrottle={16}
                >
                    {
                        BOARD_DATA.map((boardData, i) => (
                            <Board boardData={boardData} key={i} onPressButton={onPressButton} />  
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.dotsContainer}>
                {
                    BOARD_DATA.map((boardData, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1], 
                            outputRange: [0.2, 1, 0.2], 
                            extrapolate: 'clamp' 
                        });

                        let width = position.interpolate({
                            inputRange: [i - 1, i, i + 1], 
                            outputRange: [10, 40, 10], 
                            extrapolate: 'clamp' 
                        });
                            
                          return (
                                <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                                  key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                                  style={ [{width}, {opacity}, styles.dots] }
                                />
                          );
                    })
                }
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding
