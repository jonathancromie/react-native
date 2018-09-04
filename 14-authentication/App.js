import React from "react";
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button
} from "react-native";
import { createSwitchNavigator, createStackNavigator } from "react-navigation";

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem("userToken");

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken ? "App" : "Auth");
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: "Please sign in"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign In" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem("userToken", "abc");
        this.props.navigation.navigate("App");
    };
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Welcome to the app!"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Show me more of the app"
                    onPress={this._showMoreApp}
                />
                <Button title="Sign me out" onPress={this.signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate("Other");
    };

    signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("Auth");
    };
}

class OtherScreen extends React.Component {
    static navigationOptions = {
        title: "Lots of features here"
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="I'm done, sign me out"
                    onPress={this._signOutAsync}
                />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("Auth");
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack
    },
    {
        initialRouteName: "AuthLoading"
    }
);
