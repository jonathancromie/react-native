import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class FlexDirectionBasic extends React.Component {
    render() {
        // return (
        //     // Try setting `flexDirection` to `column`.
        //     <View style={{ flex: 1, flexDirection: "row" }}>
        //         <View
        //             style={{
        //                 width: 50,
        //                 height: 50,
        //                 backgroundColor: "powderblue"
        //             }}
        //         />
        //         <View
        //             style={{
        //                 width: 50,
        //                 height: 50,
        //                 backgroundColor: "skyblue"
        //             }}
        //         />
        //         <View
        //             style={{
        //                 width: 50,
        //                 height: 50,
        //                 backgroundColor: "steelblue"
        //             }}
        //         />
        //     </View>
        // );

        // return (
        //     // Try setting `justifyContent` to `center`.
        //     // Try setting `flexDirection` to `row`.
        //     <View
        //         style={{
        //             flex: 1,
        //             flexDirection: "column",
        //             justifyContent: "space-between"
        //         }}
        //     >
        //         <View
        //             style={{
        //                 width: 50,
        //                 height: 50,
        //                 backgroundColor: "powderblue"
        //             }}
        //         />
        //         <View
        //             style={{
        //                 width: 50,
        //                 height: 50,
        //                 backgroundColor: "skyblue"
        //             }}
        //         />
        //         <View
        //             style={{
        //                 width: 50,
        //                 height: 50,
        //                 backgroundColor: "steelblue"
        //             }}
        //         />
        //     </View>
        // );

        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "powderblue"
                    }}
                />
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "skyblue"
                    }}
                />
                <View
                    style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "steelblue"
                    }}
                />
            </View>
        );
    }
}
