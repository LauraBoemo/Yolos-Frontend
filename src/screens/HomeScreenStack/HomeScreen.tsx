import React, {ReactElement, useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {Headline, useTheme, Text} from "react-native-paper";
import {Image, ImageBackground, ScrollView, View} from "react-native";
import {AppTextInput} from "../../components/Forms/TextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

export function HomeScreen(): ReactElement {
    const {colors, fonts} = useTheme();
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Home',
            headerShown: false
        });
    }, []);

    const [image, setImage] = useState('');
    const handlePartyImage = (): void => {
        axios.get('http://5c280f19d82a.ngrok.io/api/party/60493aa2a7e16a60e426fbd6',
       ).then((response) => {
            console.log(response.image)
            console.log(response)
       }).catch((error) => console.log(error))
    }

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../../assets/fundo-blur-2.png')} style={{flex: 1}}>
            <ScrollView scrollEventThrottle={16}>

            {/* Caixa principal com a logo e nome. */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, marginTop: 80, marginBottom: 40}}>
                <Image style={{width: 32, height: 34}} source={require('../../../assets/logo.png')}/>
                <View style={{marginLeft: 2}}><Text style={{fontSize: 50, color: '#fff', fontStyle: 'ubuntu'}}>Yolos.</Text></View>
            </View>

            <View style={{marginHorizontal: 22, marginBottom: 22}}>
                <AppTextInput placeholder="Busque pela sua próxima festa." icon="magnify"/>
            </View>
                
            <Headline style={{fontSize: 30, color: "#fff", marginHorizontal: 22, marginBottom: 21}}>
                Principais Festas...
            </Headline>

            <View style={{height: 420, marginTop: 1, alignItems: 'center'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 

                    <TouchableOpacity onPress={(): void => navigate('BuyScreenState')}  style={{height: 400, width: 250, marginLeft: 20, marginRight: 10, borderRadius: 25}} >
                        <Image source={{uri: 'https://picsum.photos/700'}} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: 25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(): void => navigate('BuyScreenState')}  style={{height: 400, width: 250, marginLeft: 20, marginRight:10, borderRadius: 25}} >
                        <Image source={{uri: 'https://picsum.photos/400'}} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: 25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(): void => navigate('BuyScreenState')}  style={{height: 400, width: 250, marginLeft: 20, marginRight:20, borderRadius: 25}} >
                        <Image source={{uri: 'https://picsum.photos/200'}} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: 25}}/>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            </ScrollView>
            </ImageBackground>
        </View>
    );
}