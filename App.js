import * as React from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Image, ScrollView, StatusBar, ImageBackground, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { useState } from 'react';

import Home from './Home';
import Welcome from './Welcome';
import { ImageBackgroundComponent } from 'react-native';

export default function App() {

  function Component() {
    setRender(<Home />)
  }
  function Null() {
    Component()
    SetNextPage(<View></View>)
    
  }

  const [render, setRender] = useState(<Welcome />)
  const [nextPage, SetNextPage] = useState(
  <View style = {{ position: 'absolute', height: 91, width: "100%", top: "75%", justifyContent: 'center', alignItems: 'center',}}>
    <TouchableOpacity style = {{ elevation: 8, backgroundColor: '#000814', flexDirection: 'row', height: 85, width: 185 + 85, borderRadius: 15, alignItems: 'center', }} onPress={() => {Null()}}>
      <Image style = {{height: 98, width: 98, }} source = {require('./assets/logoTr.png')} />
      <Text style = {{fontSize: 15+11, color: 'ghostwhite', fontWeight: 'bold'}}>Listen Now</Text>
    </TouchableOpacity>
  </View>)
  
  return (
    <>
      <ImageBackground source = {require('./assets/BGFull.png')} style = {{flex: 1}}>
        {render}
        {nextPage}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 980,
  },
  Welcome: {
    backgroundColor: '#f5ebe0',
    height: 980,
    borderBottomRightRadius: 54,
    borderBottomLeftRadius: 54,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  station: {
    color: 'ghostwhite',
    fontSize: 19 + 6,
  },
  body: {
    flex: 1,
  },
  footer: {
    height: 200,
    backgroundColor: '#ffffff05',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    flexDirection: 'row',
  },
});
