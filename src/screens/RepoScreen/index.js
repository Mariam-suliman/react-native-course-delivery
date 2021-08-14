import React from 'react';
import {View,Text,Linking,ScrollView,TouchableOpacity} from 'react-native';
import { DetailedInfo, RepoHeader, Section } from '../../components';
import styles from './styles';

function RepoScreen({route})
{
    const {data} = route.params
    const openRepoUrl = () => {
        Linking.openURL(data.html_url);
      };
    return(
        <>
        <RepoHeader containerStyle={styles.header} text={data.full_name} textStyle={styles.headerText} imageSrc={data.owner.avatar_url}/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Section text={'Description'}>
                <Text style={styles.describtion}>{data.description}</Text>
            </Section>
            <Section text={'Additional information'}>
                <View style={styles.row}>
                    <DetailedInfo text={'Issues'} iconName={'alert'} iconColor={'#DD1212'} number={data.open_issues} numberStyle={{color:'#DD1212'}}/>
                    <DetailedInfo text={'Stars'} iconName={'star'} iconColor={'#F88703'} number={data.stargazers_count} numberStyle={{color:'#F88703'}}/>
                </View>
                <View style={styles.row}>
                    <DetailedInfo text={'Watchers'} iconName={'md-eye'} iconColor={'#052959'} number={data.watchers} numberStyle={{color:'#052959'}}/>
                    <DetailedInfo text={'Forks'} iconName={'git-network'} iconColor={'#007500'} number={data.forks} numberStyle={{color:'#007500'}}/>
                </View>
                
            </Section>
            <Section text={'Repo link'} containerStyle={{borderBottomWidth:0}}>
                <TouchableOpacity style={styles.btn} onPress={openRepoUrl}>
                <Text style=         {styles.btnText}>Click here to open repo link</Text>
                </TouchableOpacity>
            </Section>
        </ScrollView>
        </>
    )
}

export default RepoScreen;