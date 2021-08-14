import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';
import { StatusBar } from 'react-native';
import RootNavigator from './src/navigation';

export default function App()
 {
   return(
     <>
    <StatusBar barStyle={'light-content'} /> 
    <RootNavigator/>
    </>
 
   );
}

