import React, {Component} from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Display from './components/Display';
import Exo from './components/Exo';
import Positionnement from './components/Positionnement';
import Flex from './components/Flex';
import ListData from './components/ListData';

class App extends Component {
  state= {
    content: "lorem",
    search: ''
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  changeState = ()=> {
    this.setState({content:"texte de remplacement"});
  }

  render() {
    const { search } = this.state;
    return(
      <View>

        <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
        <ListData/>
      <ScrollView>
        {/* <Flex/> */}
        {/* <Positionnement/> */}
        {/* <Exo/>
        <Text style={{ color:"green", fontSize:30 }}>
            Hello world
        </Text>
        <Text>
            {this.state.content}
        </Text>
        <Display titre="React native est un bon framework" />
        <Text onPress={this.changeState} >
            Click
        </Text>
        <Image source = {require('./assets/icon.png')} style = {{ width: 200, height: 200 }}/>
        <Image source = {{ uri: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' }} style = {{ width: 200, height: 200 }}/> */}
      </ScrollView>
      </View>
    )
  }
}

export default App;

