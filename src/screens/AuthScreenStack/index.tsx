import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

import {AuthScreen} from "./AuthScreen";
import {LoginScreen} from "./LoginScreen";
import {SignupScreen} from "./SignupScreen";

const AuthStackNavigator = createStackNavigator();

export function AuthScreenStack(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <AuthStackNavigator.Navigator
            initialRouteName='AuthScreen'
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStackNavigator.Screen name="AuthScreen" options={{title: 'Auth'}} component={AuthScreen}/>
            <AuthStackNavigator.Screen name="LoginScreen" options={{title: 'Login'}} component={LoginScreen}/>
            <AuthStackNavigator.Screen name="SignupScreen" options={{title: 'Signup'}} component={SignupScreen}/>
        </AuthStackNavigator.Navigator>
    );
}