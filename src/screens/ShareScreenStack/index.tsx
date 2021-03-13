import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

import {ShareScreen} from "./ShareScreen";

const ShareStackNavigator = createStackNavigator();

export function ShareScreenStack(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <ShareStackNavigator.Navigator
            initialRouteName='ShareScreen'
            screenOptions={{
                headerTitleStyle: {
                    color: colors.text,
                    fontFamily: fonts.medium.fontFamily,
                },
                headerStyle: {backgroundColor: colors.background}
            }}
        >
            <ShareStackNavigator.Screen name="ShareScreen" options={{title: 'Share'}} component={ShareScreen}/>
        </ShareStackNavigator.Navigator>
    );
}