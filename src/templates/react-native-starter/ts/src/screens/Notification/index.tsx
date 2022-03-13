import React from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './style'

interface Props {
    
}

const Notification = (props: Props) => {

    const NOTIF = [
        {
            id: "123",
            title: "This one line notification title, unread.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, turpis in eu mauris nulla nec fames et ullamcorper. Quis nisl...",
            timestamp: "24-11-2020 23:23:20"
        },
        {
            id: "321",
            title: "This one line notification title, unread.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, turpis in eu mauris nulla nec fames et ullamcorper. Quis nisl...",
            timestamp: "24-11-2020 23:23:20"
        }
    ]

    const HeaderContent = () => (
        <View style={styles.titleScreenContainer}>
            <Text style={styles.titleScreen}>Notifications</Text>
        </View>
    )

    return (
        <SafeAreaView>
            <View style={styles.topnav}>
                <TouchableOpacity style={styles.backBtn} onPress={() => Actions.pop()}>
                    <Icon name={"arrow-back"} size={24} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={NOTIF}
                renderItem={({item}) => (
                    <View style={styles.notificationCard}>
                        <View style={styles.notificationWrapper}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <Text style={styles.timestamp}>{item.timestamp}</Text>
                        </View>
                    </View>
                )}
                ListHeaderComponent={HeaderContent()}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

export default Notification
