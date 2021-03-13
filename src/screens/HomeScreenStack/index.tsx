import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

import {HomeScreen} from "./HomeScreen";

const HomeStackNavigator = createStackNavigator();

export function HomeScreenStack(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <HomeStackNavigator.Navigator
            initialRouteName='AuthScreen'
            screenOptions={{
                headerTitleStyle: {
                    color: colors.text,
                    fontFamily: fonts.medium.fontFamily,
                },
                headerStyle: {backgroundColor: colors.background}
            }}
        >
            <HomeStackNavigator.Screen name="HomeScreen" options={{title: 'Home'}} component={HomeScreen}/>
        </HomeStackNavigator.Navigator>
    );
}