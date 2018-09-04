import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    createBottomTabNavigator,
    createStackNavigator
} from "react-navigation";

class DetailsScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Details!</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Home!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Details")}
                    title="Go to Details"
                />
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text>Settings!</Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Details")}
                    title="Go to Details"
                />
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen
});

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                    iconName = `ios-information-circle${
                        focused ? "" : "-outline"
                    }`;
                } else if (routeName === "Settings") {
                    iconName = `ios-options${focused ? "" : "-outline"}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        }
    }
);
