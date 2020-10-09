import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View } from 'react-native';

const Positionnement = () => {
    return ( 
        
        <View style={styles.container}>
            <View style={styles.orange}></View>
            <View style={styles.bleu}></View>
            <View style={styles.vert}></View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        height: 600,
    },
    orange: {
        flex: 1,
        backgroundColor: "orange",

    },
    bleu: {
        flex: 4,
        backgroundColor: "blue",

    },
    vert: {
        flex: 8,
        backgroundColor: "green",

    },
})
 
export default Positionnement;