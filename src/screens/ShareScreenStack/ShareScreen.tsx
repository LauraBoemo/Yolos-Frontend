import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ScrollView, View, ImageBackground, TouchableOpacity} from "react-native";
import {AppTextInput} from "../../components/Forms/TextInput";
import {Headline, Text, useTheme} from "react-native-paper";

export function ShareScreen(): ReactElement {
    const {navigate, setOptions} = useNavigation();
    const {colors} = useTheme();

    useEffect((): void => {
        setOptions({
            title: 'Cart',
            headerShown: false
        });
    }, []);

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../../assets/fundo-blur-2.png')} style={{flex: 1}}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, marginTop: 80, marginBottom: 40}}>
                <Image style={{width: 32, height: 34}} source={require('../../../assets/logo.png')}/>
                <View style={{marginLeft: 2}}><Text style={{fontSize: 50, color: '#fff', fontStyle: 'ubuntu'}}>Yolos.</Text></View>
            </View>

            <Headline style={{fontSize: 30, color: "#fff", marginHorizontal: 22, marginBottom: 15, marginTop: 15}}>
                    Festas para você...
            </Headline>
            
             <View style={{marginHorizontal: 22, marginBottom: 15}}>
                <AppTextInput placeholder="Busque pela sua próxima festa." icon="magnify"/>
            </View>

                <ScrollView showsVerticalScrollIndicator={false} > 
                <TouchableOpacity onPress={(): void => navigate('BuyScreenState')}  style={{height: 250, width: 250, marginLeft: 55, borderRadius: 25, alignItems:'center', margin: 10}} >
                        <ImageBackground source={require('../../../assets/BarBack.jpg')} style={{flex: 1, width: 500, height: null, resizeMode:'cover', display: 'table'}}>
                            <Image source={require('../../../assets/Slogan1.jpg')} style={{flex: 1, width: 150, marginLeft: 80, borderRadius: 25}}/>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(): void => navigate('BuyScreenState')}  style={{height: 250, width: 250, marginLeft: 55, borderRadius: 25, alignItems:'center', margin: 10}} >
                        <ImageBackground source={require('../../../assets/BarBack.jpg')} style={{flex: 1, width: 500, height: null, resizeMode:'cover', display: 'table'}}>
                            <Image source={require('../../../assets/Slogan2.jpg')} style={{flex: 1, width: 150, marginLeft: 80, borderRadius: 25}}/>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={(): void => navigate('BuyScreenState')}  style={{height: 250, width: 250, marginLeft: 55, borderRadius: 25, alignItems:'center', margin: 10, marginBottom:15}} >
                        <ImageBackground source={require('../../../assets/BarBack.jpg')} style={{flex: 1, width: 500, height: null, resizeMode:'cover', display: 'table'}}>
                            <Image source={require('../../../assets/Slogan3.jpg')} style={{flex: 1, width: 150, marginLeft: 80, borderRadius: 25}}/>
                        </ImageBackground>
                    </TouchableOpacity>
                </ScrollView>

        </ImageBackground>
        </View>
    );
}