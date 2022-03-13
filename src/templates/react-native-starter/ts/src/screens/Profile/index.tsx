import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'
import styles from './style'

interface Props {

}

const Profile = (props: Props) => {
    return (
        <SafeAreaView>
            <View style={styles.topnav}>
                <TouchableOpacity style={styles.backBtn}>
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Profile</Text>
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity onPress={() => Actions.push('account')} style={styles.optionContainer}>
                    <Text  style={styles.optionText}>My Account</Text>
                    <Icon name={"arrow-forward"} size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Frequently asked questions</Text>
                    <Icon name={"arrow-forward"} size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainer}>
                    <Text style={styles.optionText}>Terms and Conditions</Text>
                    <Icon name={"arrow-forward"} size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionContainerAlt}>
                    <Text style={styles.optionText}>Log out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.versionContainer}>
                <Text style={styles.versionText}>Version 1.0.0</Text>
            </View>
        </SafeAreaView>
    )
}

export default Profile
