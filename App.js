import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';

export default function App()
 {
   return(
    <SafeAreaView style={{backgroundColor:'#055052',flex:1,justifyContent:'center', alignItems:'center'}} >
    <HomeScreen/>
  </SafeAreaView>
   );
}

