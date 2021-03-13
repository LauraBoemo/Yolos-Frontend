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

const Tab = createBottomTabNavigator();

export function RootNavigator(): ReactElement {
    const {colors, fonts} = useTheme();

    return (
        <NavigationContainer>

            <Tab.Navigator
                // Preciso me lembrar que é aqui que defino a primeira tela... quando a primeira tela funcionar :')
                initialRouteName='HomeScreenStack' 
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
                        tabBarIcon: ({color, size}): ReactElement => (
                            <MaterialCommunityIcons name="folder-star-outline" color='#2D2D2E' size={size}/>
                        ),
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
            </Tab.Navigator>
        </NavigationContainer>
    )
}