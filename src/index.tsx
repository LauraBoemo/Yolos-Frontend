import {Platform} from "react-native";
import React, {ReactElement} from "react";
import {useTheme} from "react-native-paper";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreenStack} from "./screens/HomeScreenStack";
import {AuthScreenStack} from "./screens/AuthScreenStack";
import {AccountScreenStack} from "./screens/AccountScreenStack";
import {CartScreenStack} from "./screens/CartScreenStack";
import {ShareScreenStack} from "./screens/ShareScreenStack";
import {BuyScreenState} from "./screens/BuyScreenState";
import {FinalBuyScreen} from "./screens/FinalBuyScreenState";


const Tab = createBottomTabNavigator();

export function RootNavigator(): ReactElement {
    const {colors, fonts} = useTheme();

    return (

        <NavigationContainer>


            <Tab.Navigator
                initialRouteName='AuthScreen' 
                tabBarOptions={{
                    style: {
                        backgroundColor: 'white',
                    },
                    tabStyle: {
                        ...(Platform.OS === 'android' && {paddingBottom: 5})
                    },
                    activeTintColor: colors.primary,
                    inactiveTintColor: colors.placeholder,
                    labelStyle: {fontFamily: fonts.medium.fontFamily},
            }}>

                <Tab.Screen
                    name="AuthScreenStack"
                    component={AuthScreenStack}
                    options={{
                        title: ' ',
                        tabBarVisible: false,
                    }}
                />

                <Tab.Screen
                    name="HomeScreenStack"
                    component={HomeScreenStack}
                    options={{
                        title: ' ',
                        tabBarIcon: ({color, size}): ReactElement => (
                            <MaterialCommunityIcons name="home-outline" color='#2D2D2E' size={size}/>
                        ),
                    }}
                />

                <Tab.Screen
                    name="ShareScreenStack"
                    component={ShareScreenStack}
                    options={{
                        title: ' ',
                        tabBarIcon: ({color, size}): ReactElement => (
                            <MaterialCommunityIcons name="feature-search-outline" color='#2D2D2E' size={size}/>
                        ),
                    }}
                />

                {/* <Tab.Screen
                    name="FinalBuyScreen"
                    component={FinalBuyScreen}
                    options={{
                        title: ' ',
                    }}
                /> */}

                <Tab.Screen
                    name="CartScreenStack"
                    component={CartScreenStack}
                    options={{
                        title: ' ',
                        tabBarIcon: ({color, size}): ReactElement => (
                            <MaterialCommunityIcons name="ticket-outline" color='#2D2D2E' size={size}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="AccountScreenStack"
                    component={AccountScreenStack}
                    options={{
                        title: ' ',
                        tabBarIcon: ({color, size}): ReactElement => (
                            <MaterialCommunityIcons name="account-outline" color='#2D2D2E' size={size}/>
                        ),
                    }}
                />
                
                <Tab.Screen
                    name="BuyScreenState"
                    component={BuyScreenState}
                    options={{
                        title: ' ',
                    }}
                />

            </Tab.Navigator>

        </NavigationContainer>
    )
}