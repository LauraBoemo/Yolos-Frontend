import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

import {AccountScreen} from "./AccountScreen";

const AccountStackNavigator = createStackNavigator();

export function AccountScreenStack(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <AccountStackNavigator.Navigator
            initialRouteName='AccountScreen'
            screenOptions={{
                headerTitleStyle: {
                    color: colors.text,
                    fontFamily: fonts.medium.fontFamily,
                },
                headerStyle: {backgroundColor: colors.background}
            }}
        >
            <AccountStackNavigator.Screen name="AccountScreen" options={{title: 'Account'}} component={AccountScreen}/>
        </AccountStackNavigator.Navigator>
    );
}