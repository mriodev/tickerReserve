import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper'

import { Icon } from 'react-native-elements'
export default function ProfileScreen() {
    return (
        <SafeAreaView style={StyleSheet.Container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image source={{ url: '', }} size={80} />
                    <View style={{ marginLeft: 20 }}>

                        <Title style={[styles.title, { marginTop: 15, marginBottom: 5, }]}> John Doe</Title>
                        <Caption style={styles.caption}>DJ</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon
                        type="material-community"
                        name="arrow-left"
                        color="#777777"
                        size={28}
                    ></Icon>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata</Text>

                </View>
                <View style={styles.row}>
                    <Icon
                        type="material-community"
                        name="arrow-left"
                        color="#777777"
                        size={28}
                    ></Icon>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata</Text>

                </View>
                <View style={styles.row}>
                    <Icon
                        type="material-community"
                        name="arrow-left"
                        color="#777777"
                        size={28}
                    ></Icon>
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Kolkata</Text>

                </View>

            </View>
            <View style={styles.infoBoxWrapper}>

                <View style={[styles.infoBox, { borderRightColor: '#dddddd', borderRightWidth: 1 }]}>
                    <Title>$140</Title>
                    <Caption>Wallet</Caption>
                </View>

                <View style={styles.infoBox}>
                    <Title>$140</Title>
                    <Caption>Wallet</Caption>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple>
                    <View style={styles.menuItem}>

                    </View>
                </TouchableRipple>
            </View>


        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },

    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 14
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100

    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuWrapper: {
        marginTop: 10
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600'
    }




})