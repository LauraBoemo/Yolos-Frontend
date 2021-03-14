import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

const FinalBuyStackNavigator = createStackNavigator();

export function FinalBuyScreen(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <FinalBuyStackNavigator.Navigator
            initialRouteName='BuyScreen'
            screenOptions={{
                headerTitleStyle: {
                    color: colors.text,
                    fontFamily: fonts.medium.fontFamily,
                },
                headerStyle: {backgroundColor: colors.background}
            }}
        >
            <FinalBuyStackNavigator.Screen name="BuyScreen" options={{title: 'Buy'}} component={FinalBuyScreen}/>
        </FinalBuyStackNavigator.Navigator>
    );
}