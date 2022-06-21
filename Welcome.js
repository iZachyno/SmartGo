import * as React from 'react';
import { StyleSheet, Image, StatusBar, ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export default function Welcome(){
    return(
        <>
        <StatusBar backgroundColor = {'#f4978e'} />
        <View style = {{flex: 1, backgroundColor: 'black'}}>
          <ImageBackground source={require('./assets/BGP.jpg')} style = {styles.Welcome}>
            <View style = {{ flexDirection: 'row', top: '15%', justifyContent: 'space-evenly', alignItems: 'center', height: 89, width: '100%', position: 'absolute'}}>
              <View style = {{ alignItems: 'center', justifyContent: 'center', height: 85, width: 355-55}}>
                <Text style = {{ fontWeight: 'bold', fontSize: 45, color: 'ghostwhite', marginLeft: 15}}>Smart</Text>
              </View>
              <View style = {{ alignItems: 'center', justifyContent: 'center', height: 85, width: 355-55}}>
                <Text style = {{fontSize: 45, fontWeight: 'bold', color: '#2f4858'}}>Go</Text>
              </View>
            </View>
          
          </ImageBackground>
        </View>
        </>
    )
}
//              <Text style = {{ fontWeight: 'bold', fontSize: 45, color: 'ghostwhite', marginLeft: 15}}>Smart<Text style = {{fontSize: 45, fontWeight: 'bold', color: '#2f4858'}}>Go</Text></Text>
const styles = StyleSheet.create({
    container: {
    },
    Welcome: {
      flex: 1,
      backgroundColor: '#f5ebe0',
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