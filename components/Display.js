import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Display = ({titre}) => {
    return ( 
    <Text style = {styles.myStyle}>{titre}</Text>
     );
}


const styles = StyleSheet.create({
    myStyle: {
        margin: 30,
        color: "yellow",
        backgroundColor: "gray"
    }
})
 
export default Display;