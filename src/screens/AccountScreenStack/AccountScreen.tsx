import {StatusBar} from "expo-status-bar";
import React, {ReactElement, useEffect} from "react";
import {Image, View, ImageBackground, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Headline, TextInput, useTheme, Text} from "react-native-paper";

export function AccountScreen(): ReactElement {
    const {colors} = useTheme();

    const {setOptions} = useNavigation();
    useEffect((): void => {
        setOptions({
            title: 'Account',
            headerShown: false
        });
    }, []);

    return (
        <View style={{flex: 1}}>
            <StatusBar style='light'/>
            <ImageBackground
                source={require('../../../assets/fundo-blur-2.png')}
                style={{flex: 1}}
            >
            <View style={{marginHorizontal: 96, marginTop: 48, marginBottom: 43}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 35, height: 35}} source={require('../../../assets/logo.png')}/>
                    <Headline style={{marginLeft: 2, fontSize: 48, lineHeight: 80, color: "#fff"}}>Yolos.</Headline>
                </View>
            </View>
            <View style={{marginHorizontal: 22, flex: 1}}>
                <Text style={{fontSize: 30, textAlign: 'center', color: "#fff", marginBottom: 20}}>
                    Laura Boemo
                </Text>
                <TextInput
                // Arrumar as cores
                    disabled 
                    style={{
                        marginBottom: 15,
                        backgroundColor: '#8a888a',
                        borderRadius: 15,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15
                    }}
                    value="lauraboemo@gmail.com"
                    left={<TextInput.Icon name='mail'/>}
                />
                <TextInput
                    disabled
                    style={{
                        marginBottom: 15,
                        backgroundColor: '#8a888a',
                        borderRadius: 15,
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15
                    }}
                    value="*******"
                    left={<TextInput.Icon name='lock'/>}
                />
                
                {/* Arrumar essa rota e a posição do login */}
                <View style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={(): void => navigate('AuthScreen')}>
                            <Image style={{width: 186, height: 49, marginTop: 250, borderRadius: 20}}
                                source={require('../../../assets/Logout.jpg')}/>
                        </TouchableOpacity>
                </View>
            </View>
    
            </ImageBackground>
        </View>
    );
}