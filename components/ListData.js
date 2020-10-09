import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View, FlatList, TouchableHighlight } from 'react-native';



const ListData = () => {
    const list = [
        {id: 1, titre: "titre 1", description: "description 1"},
        {id: 2, titre: "titre 2", description: "description 2"},
        {id: 3, titre: "titre 3", description: "description 3"},
    ];

    const cliquer = ()=>{
        console.log('Le titre a été cliqué');
    }

    return ( 
        <View style={styles.container} >
            
            <FlatList keyExtractor={(item)=>item.id.toString()} data={list} renderItem={({item})=>
            <View>
                <TouchableHighlight onPress = {cliquer}>

                <Text style={styles.titre}>{item.titre}</Text>
                </TouchableHighlight>
                <Text style={styles.txt}>{item.description}</Text>
            </View>} />
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    titre: {
        fontSize: 30,
        textAlign: "center",
        margin: 20,
    },
    txt: {
        backgroundColor: "gold",
        textAlign: "center",
        padding: 10,
    }
})
export default ListData;
