import {StatusBar} from "expo-status-bar";
import {Headline} from "react-native-paper";
import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ImageBackground, SafeAreaView, TouchableOpacity, View, Text} from "react-native";
import {Banner} from "../../components/AuthScreen/Banner";
import {AppTextInput} from "../../components/Forms/TextInput";

export function LoginScreen(): ReactElement {
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Login',
        });
    }, []);

    return (
        <View style={{flex: 1}}>

            <ImageBackground source={require('../../../assets/fundo-blur.png')} style={{flex: 1}} >
            
            <Banner/>
            
                <View style={{marginTop: -20, marginHorizontal: 24, marginBottom: 12}}>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="E-mail" icon='mail'/>
                    </View>
                    <AppTextInput placeholder="Senha" icon='lock'/>
                </View>

                <View style={{alignItems: 'center'}}>

                    {/* Aqui quando clicar em Login tem que ir para Home... se der certo o login */}

                    <TouchableOpacity onPress={(): void => navigate('LoginScreen')}>
                        <Image style={{marginTop: 15, width: 186, height: 49, marginBottom: 18}} source={require('../../../assets/login-btn.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(): void => navigate('SignupScreen')}>
                        <Image style={{width: 186, height: 49, marginBottom: 18}} source={require('../../../assets/sign-up-btn.png')}/>
                    </TouchableOpacity>
            
                </View>
        
            </ImageBackground>
        
        </View>
    );
}