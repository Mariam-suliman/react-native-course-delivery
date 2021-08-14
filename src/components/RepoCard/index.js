import React from 'react';
import {Pressable,Text,Image,View} from 'react-native';
import logo from '../../../assets/logo.png'
import {InfoContainer} from '../InfoContainer';
import { limitTextLength } from "../../utils";
import styles from './styles';

function RepoCard({imageSrc,title,
    description,issuesNumber,starsNumber,providerName,numberOfLines,onPress})
{
    return(
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.contentContainer}>
            <Image source={{uri:imageSrc}} style={styles.image}/>
            
            <View style={styles.rightView}>
            <Text style={styles.title} numberOfLines={1}>{limitTextLength(15, title)}</Text>
            <Text style={styles.desc} numberOfLines={numberOfLines}>{limitTextLength(25, description)}</Text>
            </View>
            </View>

            <View style={styles.InfoCardContainer}>
                <InfoContainer iconName={'star'} text={starsNumber} iconColor={'#F88703'} iconSize={16}/>
                <InfoContainer iconName={'alert'} text={issuesNumber} iconColor={'#DD1212'} iconSize={16}/>
                <InfoContainer iconName={'logo-github'} text={providerName} iconColor={'black'} iconSize={16}/>
            </View>
        </Pressable>
    )

}

export {RepoCard};