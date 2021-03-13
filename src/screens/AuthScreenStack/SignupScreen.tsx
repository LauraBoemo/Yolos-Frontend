import {StatusBar} from "expo-status-bar";
import {useTheme} from "react-native-paper";
import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ImageBackground, SafeAreaView, TouchableOpacity, View} from "react-native";

import {Banner} from "../../components/AuthScreen/Banner";
import {AppTextInput} from "../../components/Forms/TextInput";

export function SignupScreen(): ReactElement {
    const {colors} = useTheme();
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Signup',
        });
    }, []);

    return (
        <View style={{flex: 1}}>

            <ImageBackground source={require('../../../assets/fundo-blur.png')} style={{flex: 1}} >

                <Banner/>
                
                <View style={{marginTop: -20,  marginHorizontal: 24, marginBottom: 12}}>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="Name" icon='account'/>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="E-mail" icon='mail'/>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="Senha" icon='lock'/>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="Confirmação de Senha" icon='lock'/>
                    </View>
                </View>
                
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={(): void => navigate('SingupScreen')}>
                        <Image style={{width: 186, height: 49, marginBottom: 18}}
                               source={require('../../../assets/sign-up-btn-2.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(): void => navigate('LoginScreen')}>
                        <Image style={{width: 186, height: 49}} source={require('../../../assets/login-btn-2.png')}/>
                    </TouchableOpacity>
                </View>

            </ImageBackground>

        </View>
    );
}