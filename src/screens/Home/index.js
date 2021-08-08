import React from 'react';
import { View } from 'react-native';
import {Counter} from '../../components';
import styles  from './styles';

const Home = () => {
    return (
        <View style={styles.container}>
            <Counter/>
        </View>
      );
}
 
export default Home;