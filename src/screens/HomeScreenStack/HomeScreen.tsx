import {StatusBar} from "expo-status-bar";
import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Card, Headline, useTheme, Text, shadow} from "react-native-paper";
import {Image, ImageBackground, SafeAreaView, ScrollView, View} from "react-native";
import {AppTextInput} from "../../components/Forms/TextInput";
import { forFadeFromBottomAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";

export function HomeScreen(): ReactElement {
    const {colors, fonts} = useTheme();
    const {navigate, setOptions} = useNavigation();

    useEffect((): void => {
        setOptions({
            title: 'Home',
            headerShown: false
        });
    }, []);

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../../assets/fundo-blur-2.png')} style={{flex: 1}}>
            <ScrollView scrollEventThrottle={16}>

            {/* Caixa principal com a logo e nome. */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, marginTop: 80, marginBottom: 40}}>
                <Image style={{width: 32, height: 34}} source={require('../../../assets/logo.png')}/>
                <View style={{marginLeft: 2}}><Text style={{fontSize: 50, color: '#fff', fontStyle: 'ubuntu'}}>Yolos.</Text></View>
            </View>

            {/* Caixa de pesquisa... Isso funciona? */}
            <View style={{marginHorizontal: 22, marginBottom: 22}}>
                <AppTextInput placeholder="Busque pela sua próxima festa." icon="magnify"/>
            </View>
                
            <Headline style={{fontSize: 30, color: "#fff", marginHorizontal: 22, marginBottom: 21}}>
                Principais Festas...
            </Headline>

            {/* Catálogo de festas na horizontal... Eu poderia criar uma pasta .js própia para isso... */}
            <View style={{height: 420, marginTop: 1, alignItems: 'center'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                    <View style={{height: 400, width: 250, marginLeft: 20, borderRadius: '25'}}>
                    <View style={{flex:2}}>
                        <Image source={require('../../../assets/Slogan1.jpg')} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: '25'}}/>
                    </View>
                    </View>
                    <View style={{height: 400, width: 250, marginLeft: 20, borderRadius: '25'}}>
                    <View style={{flex:2}}>
                        <Image source={require('../../../assets/Slogan2.jpg')} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: '25'}}/>
                    </View>
                    </View>
                    <View style={{height: 400, width: 250, marginLeft: 20, marginRight:20, borderRadius: '25'}}>
                    <View style={{flex:2}}>
                        <Image source={require('../../../assets/Slogan3.jpg')} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: '25'}}/>
                    </View>
                    </View>
                </ScrollView>
            </View>

            </ScrollView>
            </ImageBackground>
        </View>
    );
}