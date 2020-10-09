import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View, Button, Alert} from 'react-native';

const Flex = () => {
    const afficher = () => {
        Alert.alert("j'ai cliqué");
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.orange}></View>
            <View style={styles.bleu}></View>
            <View style={styles.vert}></View>
            <View>

            <Button title="cliquer" onPress={afficher} />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 600,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1
     
    },
    orange: {
 
        backgroundColor: "orange",
        width: 100,
        height: 100,

    },
    bleu: {

        backgroundColor: "blue",
        width: 100,
        height: 100,

    },
    vert: {

        backgroundColor: "green",
        width: 100,
        height: 100,

    },
})
 
export default Flex;