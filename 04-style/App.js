import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class LotsOfStyles extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>Just Red</Text>
                <Text style={styles.bigblue}>Just Big Blue</Text>
                <Text style={[styles.bigblue, styles.red]}>
                    Big Blue then Red
                </Text>
                <Text style={[styles.red, styles.bigblue]}>
                    Red then Big Blue
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 30
    },
    red: {
        color: "red"
    }
});
