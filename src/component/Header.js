import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, parameters } from '../global/style'
import { Icon } from 'react-native-elements'
export default function Header({ title, navigation }) {
    return (
        <View style={styles.header}>

            <View style={{ marginLeft: 20 }}>
                <Icon
                    type="material-community"
                    name="arrow-left"
                    color={colors.headertext}
                    size={28}
                ></Icon>
            </View>
            <Text style={styles.headertext}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,

    },
    headertext: {
        color: colors.headertext,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30
    }

})