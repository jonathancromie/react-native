import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// export default class Bananas extends React.Component {
//     render() {
//         let pic = {
//             uri:
//                 "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
//         };

//         return <Image source={pic} style={{ width: 250, height: 110 }} />;
//     }
// }

class Greeting extends React.Component {
    render() {
        return <Text>Hello {this.props.name}!</Text>;
    }
}

export default class LotsOfGreetings extends React.Component {
    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <Greeting name="Rexxar" />
                <Greeting name="Jaina" />
                <Greeting name="Valeria" />
            </View>
        );
    }
}
