import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import React, {ReactElement, ReactNode} from 'react';
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import {
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    useFonts,
} from "@expo-google-fonts/ubuntu";

import {RootNavigator} from "./src";

type ThemeProviderProps = {
    children: ReactNode;
}

function ThemeProvider(props: ThemeProviderProps): ReactElement {

    const theme = {
        ...DefaultTheme,
        fonts: {
            regular: {
                fontFamily: 'Ubuntu_400Regular',
            },
            medium: {
                fontFamily: 'Ubuntu_500Medium',
            },
            light: {
                fontFamily: 'Ubuntu_300Light',
            },
            thin: {
                fontFamily: 'Ubuntu_700Bold',
            },
        },
    };

    return (
        <PaperProvider theme={theme}>
            {props.children}
        </PaperProvider>
    )
}

export default function App() {
    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_400Regular,
        Ubuntu_500Medium,
        Ubuntu_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <ThemeProvider>
            <RootNavigator/>
        </ThemeProvider>
    );
}