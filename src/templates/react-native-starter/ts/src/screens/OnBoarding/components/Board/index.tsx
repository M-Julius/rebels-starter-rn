import React from 'react'
import { Image, Text, TouchableOpacity, View , ImageBackground} from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './style'

interface BoardInterface {
    boardData: {
        title: string,
        description: string,
        img_src: string,
        buttonText: string,
        key: number,
        skipText?: string
    },
    onPressButton: (e: number) => void
}

const Board: React.FC<BoardInterface> = ({boardData, onPressButton}) => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <ImageBackground style={styles.img} source={{uri: boardData.img_src}} >
                    {
                        boardData.skipText ? (
                            <TouchableOpacity style={styles.skipButton} onPress={() => Actions.replace('signin')}>
                                <Text style={styles.skipText}>{boardData.skipText}</Text>
                            </TouchableOpacity>      
                        )
                        :
                        null
                    }
                </ImageBackground>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.textSection}>
                    <Text style={styles.boardTitle}>{boardData.title}</Text>
                    <Text style={styles.boardDescription}>{boardData.description}</Text>
                </View>
                <View style={styles.navigationSection}>
                    <TouchableOpacity style={styles.button} onPress={() => onPressButton(boardData.key)}>
                        <Text>{boardData.buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Board
