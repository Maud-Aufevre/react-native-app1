import React from 'react';
import { Text, Image, ScrollView, StyleSheet, View } from 'react-native';

const Exo = () => {
    return ( 
    <ScrollView>
        <Text style = {styles.myStyle1}>Article 2</Text>
        <View style = {{alignItems: "center"}}>
            
        <Image source = {{ uri: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' }} style = {styles.myStyle3}/>
        </View>
        <Text style = {styles.myStyle2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper nulla ut nisi blandit aliquet. Proin sodales nulla quis laoreet aliquet. Aliquam lectus neque, dictum a risus at, consectetur bibendum nisi. Cras blandit vulputate magna, ut auctor ex tempor vitae. Integer tristique, quam eu porta gravida, metus felis sagittis massa, sit amet pulvinar velit purus sed lacus. Donec id ante vitae est viverra mattis vitae nec risus. Morbi a ante vel ipsum placerat aliquam nec quis diam. Sed ut ex condimentum, vulputate risus quis, tempor ante. Maecenas venenatis ex dolor, ut semper risus euismod a. Quisque viverra orci tincidunt, efficitur est id, malesuada tellus. Praesent non justo sit amet est rutrum posuere. Cras sollicitudin sit amet lacus non euismod. Nulla dictum ornare luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</Text>
    </ScrollView>
     );
}


const styles = StyleSheet.create({
    myStyle1: {
        marginBottom: 30,
        fontSize: 30,
        textAlign: "center",
        color: "blue"
    },

    myStyle2: {
        margin: 30,
        padding: 10,
        color: "white",
        backgroundColor: "blue"
    },

    myStyle3: {
        width: 200,
        height: 200
    }
})
 
export default Exo;