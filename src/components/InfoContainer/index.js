import React from 'react';
import {View,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';


function InfoContainer({iconName,text,containerStyle,iconColor,iconSize,textStyle})
{
    return(
        <View style={[styles.container,containerStyle]}>
            
            <Text style={[styles.text,textStyle]}>{text}</Text>
            <Ionicons name={iconName}  color={iconColor} size={iconSize} />
        </View>
    )
}

export {InfoContainer};
