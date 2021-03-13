import {Image, View} from "react-native";
import React, {ReactElement} from "react";
import {Headline, Text} from "react-native-paper";

export function Banner(): ReactElement {
    return (
        <View style={{alignItems: 'center', marginTop: 135, marginBottom: 82}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{width: 76, height: 76}} source={require('../../../assets/logo.png')}/>
                <Headline style={{fontSize: 90, lineHeight: 90, color: "#FFF", fontStyle: 'ubuntu'}}>Yolos.</Headline>
            </View>
            <Text style={{fontSize: 20, color: "#FFF", fontStyle: 'ubuntu'}}>Em busca de sua próxima festa.</Text>
        </View>
    )
}