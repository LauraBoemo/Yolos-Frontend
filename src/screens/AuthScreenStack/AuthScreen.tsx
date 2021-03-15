import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ImageBackground, TouchableOpacity, View} from "react-native";
import {Banner} from "../../components/AuthScreen/Banner";

export function AuthScreen(): ReactElement {
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Auth',
        });
    }, []);

    return (
        <View style={{flex: 1}}>

            <ImageBackground source={require('../../../assets/fundo-blur.png')} style={{flex: 1}} >
            
            <Banner/>

            <View style={{alignItems: 'center'}}>

                <TouchableOpacity onPress={(): void => navigate('LoginScreen')}>
                    <Image style={{marginTop: 80, width: 186, height: 49, marginBottom: 18}} source={require('../../../assets/login-btn.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={(): void => navigate('SignupScreen')}>
                    <Image style={{width: 186, height: 49}} source={require('../../../assets/sign-up-btn.png')}/>
                </TouchableOpacity>

            </View>

            </ImageBackground>

        </View>
    );
}