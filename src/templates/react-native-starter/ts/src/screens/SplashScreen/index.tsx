import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import images from '../../const/Images'
import styles from './styles'
import LogoSplashScreen from '../../assets/images/MainLogoPanorama.svg'

interface Props {

}

const Splashscreen = (props: Props) => {

    const [dummyToken, setDummyToken] = useState<string>('')

    useEffect(() => {
        let timer = setTimeout(() => {
            if(dummyToken !== ''){
                Actions.replace('main')
                // Actions.replace('account')
            }else{
                Actions.replace('onboarding')
            }
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [])
    return (
        <View style={styles.container}>
            <LogoSplashScreen height={81} />
        </View>
    )
}

export default Splashscreen
