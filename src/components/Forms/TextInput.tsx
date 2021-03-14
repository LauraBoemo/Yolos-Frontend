import React from "react";
import {TextInput} from 'react-native-paper';
import {LinearGradient} from "expo-linear-gradient";

type AppTextInputProps = {
    placeholder: string;
    icon: string;
    onChange: (((text: string) => void) & Function);
    value: string;
};

export function AppTextInput(props: AppTextInputProps) {
    const {placeholder, icon, onChange, value} = props;

    return (
        <LinearGradient
            colors={["#4b2f3c", '#402c35', "#3d3d3e"]}
            start={[0.5, 0.2]}
            style={{borderRadius: 15}}
        >
            <TextInput
                value={value}
                onChangeText={onChange}
                label={placeholder}
                theme={{
                    colors: {
                        text: '#fff',
                        primary: '#8a888a',
                        placeholder: '#8a888a'
                    }
                }}
                style={{
                    overflow: 'hidden',
                    backgroundColor: 'transparent',
                    borderRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15
                }}
                placeholderTextColor='#8a888a'
                left={
                    <TextInput.Icon name={icon} color='#fff'/>
                }
            />
        </LinearGradient>
    )
}