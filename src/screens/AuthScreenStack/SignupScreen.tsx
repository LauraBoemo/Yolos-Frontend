import {useTheme} from "react-native-paper";
import React, {ReactElement, useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ImageBackground, TouchableOpacity, View} from "react-native";
import {Banner} from "../../components/AuthScreen/Banner";
import {AppTextInput} from "../../components/Forms/TextInput";
import axios from 'axios';

export function SignupScreen(): ReactElement {
    const {colors} = useTheme();
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Signup',
        });
    }, []);

    // Integração com o BackEnd usando Axios Pt. 1

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (): void => {
        // Atuação do Postman, cria requisição!
        axios.post('http://1fdb651006f0.ngrok.io/api/signup',
         {
             name: name,
             email: email,
             password: password,
         }
        ).then((response) => {
            console.log(response)
            navigate('LoginScreen')
        }).catch((error) => console.log(error))
    }

    return (
        <View style={{flex: 1}}>

            <ImageBackground source={require('../../../assets/fundo-blur.png')} style={{flex: 1}} >

                <Banner/>
                
                <View style={{marginTop: -20,  marginHorizontal: 24, marginBottom: 12}}>

                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="Name" icon='account' value={name} onChange={setName}/>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="E-mail" icon='mail' value={email} onChange={setEmail}/>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="Senha" icon='lock' value={password} onChange={setPassword}/>
                    </View>
                    
                    {/* <View style={{marginBottom: 15}}>
                        <AppTextInput placeholder="Confirmação de Senha" icon='lock'/>
                    </View> */}

                </View>
                
                <View style={{alignItems: 'center'}}>

                    {/* Integração com o BackEnd usando Axios Pt. 2 */}

                    <TouchableOpacity onPress={handleSignUp}>
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