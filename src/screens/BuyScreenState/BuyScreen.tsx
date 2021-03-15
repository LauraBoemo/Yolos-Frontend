import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {View, ImageBackground, Image} from "react-native";
import {Text, useTheme} from "react-native-paper";
import { AppTextInput } from "../../components/Forms/TextInput";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export function BuyScreen(): ReactElement {
    const {colors} = useTheme();
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Cart',
            headerShown: false
        });
    }, []);

    return (
        <View style={{flex: 1}}>

            <ImageBackground source={{uri: 'https://picsum.photos/700'}} style={{flex: 1}}>

                <View style={{flex: 1}}>

                    <ImageBackground source={require('../../../assets/BarBack.jpg')} style={{flex: 1, marginTop: 380, marginVertical: 0}}>
                        <Text style={{fontSize: 30, color: "#fff", textAlign: 'center', marginTop: 15}}>Nome da Festa!</Text>
                        <Text style={{fontSize: 20, color: "#fff", textAlign: 'center', marginBottom: 15}}>Preço      Data e horário de início</Text>

                        <ScrollView>
                            <View style={{marginTop: 15, marginHorizontal: 24, marginBottom: 20}}>
                            <View style={{marginBottom: 15}}>
                                <AppTextInput placeholder="Nome no cartão"/>
                            </View>
                            <View style={{marginBottom: 15}}>
                                <AppTextInput placeholder="CPF"/>
                            </View>
                            <View style={{marginBottom: 15}}>
                                <AppTextInput placeholder="Número do cartão"/>
                            </View>
                                <AppTextInput placeholder="Código"/>
                            </View>
                            <TouchableOpacity onPress={(): void => navigate('HomeScreenStack')} style={{alignItems: "center", flex: 1, borderRadius: 25}}>
                                <Image source={require('../../../assets/Buy.jpg')} style={{width: 313, height: 35, marginTop: 1, borderRadius: 20}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={(): void => navigate('CartScreenStack')} style={{alignItems: "center", flex: 1, borderRadius: 25, marginTop: 15}}>
                                <Image source={require('../../../assets/AddCart.jpg')} style={{width: 313, height: 35, marginTop: 1, borderRadius: 20, marginBottom:15}}/>
                            </TouchableOpacity>
                        </ScrollView>
                        
                    </ImageBackground>

                </View>

            </ImageBackground>
            
        </View>
    );
}