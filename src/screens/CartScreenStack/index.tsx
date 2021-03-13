import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

import {CartScreen} from "./CartScreen";

const CartStackNavigator = createStackNavigator();

export function CartScreenStack(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <CartStackNavigator.Navigator
            initialRouteName='CartScreen'
            screenOptions={{
                headerTitleStyle: {
                    color: colors.text,
                    fontFamily: fonts.medium.fontFamily,
                },
                headerStyle: {backgroundColor: colors.background}
            }}
        >
            <CartStackNavigator.Screen name="CartScreen" options={{title: 'Cart'}} component={CartScreen}/>
        </CartStackNavigator.Navigator>
    );
}