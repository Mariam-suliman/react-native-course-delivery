import React, { useState } from 'react';
import { Text,View,TouchableOpacity } from 'react-native';
import styles from './styles';

const Counter = () => {
   const[Counter,setCounter]=useState(0);
   const Increment=()=>setCounter((val)=>val+1);
   const Decrement=()=>setCounter((val)=>val-1);
  return (

    <View>
      <View style={styles.countContainer}>
        <Text style={styles.count}>{Counter}</Text>
      </View>

      <View style={styles.btnContaiener}>
        <TouchableOpacity style={styles.btn}           onPress={Increment}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}           onPress={Decrement}>
          <Text style={styles.btnText}>−</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
 
export {Counter} ;