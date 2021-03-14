import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import React, { ReactElement, useEffect, useState } from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { Banner } from "../../components/AuthScreen/Banner";
import { AppTextInput } from "../../components/Forms/TextInput";

export function LoginScreen(): ReactElement {
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Login',
        });
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (): void => {
        axios.post('http://5c280f19d82a.ngrok.io/api/login',
        {
            email: email,
            password: password,
        }
       ).then((response) => {
            console.log(response)
            navigate('HomeScreenStack');
       }).catch((error) => console.log(error))
    }

    return (
        <View style={{flex: 1}}>

            <ImageBackground source={require('../../../assets/fundo-blur.png')} style={{flex: 1}} >
            
            <Banner/>
            
                <View style={{marginTop: -20, marginHorizontal: 24, marginBottom: 12}}>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="E-mail" icon='mail'value={email} onChange={setEmail}/>
                    </View>
                    <AppTextInput placeholder="Senha" icon='lock' value={password} onChange={setPassword}/>
                </View>

                <View style={{alignItems: 'center'}}>

                    <TouchableOpacity onPress={handleLogin}>
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