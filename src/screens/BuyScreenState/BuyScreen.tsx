import React, {ReactElement, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {Image, View, ImageBackground} from "react-native";
import {Text, useTheme} from "react-native-paper";

export function BuyScreen(): ReactElement {
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
            <ImageBackground source={{uri: 'https://picsum.photos/700'}} style={{flex: 1}}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 22, marginTop: 80, marginBottom: 40}}>
                <Image style={{width: 32, height: 34}} source={require('../../../assets/logo.png')}/>
                <View style={{marginLeft: 2}}><Text style={{fontSize: 50, color: '#fff', fontStyle: 'ubuntu'}}>Yolos.</Text></View>
            </View>

            <View style={{height: 450, marginTop: 1, alignItems: 'center'}}>

            </View>
            
        </ImageBackground>
        </View>
    );
}