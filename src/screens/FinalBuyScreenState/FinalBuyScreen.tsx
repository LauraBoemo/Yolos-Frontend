import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, ScrollView, View, ImageBackground, TouchableOpacity} from "react-native";
import {Headline, Text, useTheme} from "react-native-paper";

export function FinalBuyScreen(): ReactElement {
    const {colors} = useTheme();
    const {setOptions} = useNavigation();

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

            <Headline style={{fontSize: 30, color: "#fff", marginHorizontal: 22, marginBottom: 25}}>
                Seus ingressos...
            </Headline>

            <View style={{height: 450, marginTop: 1, alignItems: 'center'}}>
                <ScrollView showsVerticalScrollIndicator={false} > 
                    <View style={{height: 200, width: 250, marginLeft: 55, borderRadius: '25', alignItems:'center', margin: 15}}>
                    <Image source={require('../../../assets/BarBack.jpg')} style={{ flex: 2, width: 250, height: null, resizeMode:'cover', borderRadius: '25'}}/>
                    </View>
                    <View style={{height: 200, width: 250, marginLeft: 55, marginRight: 20, marginEnd:20, borderRadius: '25', margin: 15}}>
                        <Image source={require('../../../assets/BarBack.jpg')} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: '25'}}/>
                    </View>
                    <View style={{height: 200, width: 250, marginLeft: 55, marginRight: 20, marginEnd:20, borderRadius: '25', margin: 15}}>
                        <Image source={require('../../../assets/BarBack.jpg')} style={{flex: 1, width: 250, height: null, resizeMode:'cover', borderRadius: '25'}}/>
                    </View>
                </ScrollView>
            </View>

        </ImageBackground>
        </View>
    );
}