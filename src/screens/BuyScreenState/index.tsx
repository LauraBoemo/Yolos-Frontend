import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";
import {BuyScreen} from "./BuyScreen";

const BuyStackNavigator = createStackNavigator();

export function BuyScreenState(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <BuyStackNavigator.Navigator
            initialRouteName='BuyScreen'
            screenOptions={{
                headerTitleStyle: {
                    color: colors.text,
                    fontFamily: fonts.medium.fontFamily,
                },
                headerStyle: {backgroundColor: colors.background}
            }}
        >
            <BuyStackNavigator.Screen name="BuyScreen" options={{title: 'Buy'}} component={BuyScreen}/>
        </BuyStackNavigator.Navigator>
    );
}