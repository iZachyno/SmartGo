import * as React from 'react';
import { Audio } from 'expo-av';
import { StyleSheet, Image, ScrollView, StatusBar, ImageBackground, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home(){

  const [sound, setSound] = React.useState();

  async function playSound(playing) {
    try{
      if(!playing){
      const { sound } = await Audio.Sound.createAsync(
        { uri: curSong},
        { shouldPlay: true }
    );
    setSound(sound);

    await sound.playAsync();
    }
    else{
      await sound.stopAsync()
      await sound.unloadAsync()
    }

    React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
     }
    
    catch{
      console.log("")
    }
    }

  const play = <FontAwesome5 style = {{marginLeft: 5 - 5}} name="stop" size={24} color= {"ghostwhite"} />;
  const pause = <FontAwesome5 style = {{marginLeft: 5}} name="play" size={24} color={"ghostwhite"} />;
  const start = <MaterialIcons name="not-started" size={45} color="#ff5d8f" /> 

  const [playPause, setplayPause] = useState(start);//Play and pause button

  const [playState, setPlayState] = useState(false);//Whether audio playing or not
  
  const [curSong, setCurrent] = useState("https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3")
  const [curImg, setImage] = useState("https://github.com/iZachyno/Tinker-3D/blob/main/git.png?raw=true")

  const playlist = {
    stream : "http://102.130.114.208:8000/pcfm",
    image : "https://i1.wp.com/www.pcfm.co.ls/wp-content/uploads/2017/06/pcfm_logo-1.png?fit=192%2C55",
    station : "95.6",
    name : "PC FM"
  }
  const playlist1 = {
    stream : "http://ca3.rcast.net:8040/;stream.nsv",//moafrika 89.7
    image : "http://www.moafrikafm.co.ls/assets/img/moafrika.png",
    station : 89.7,
    name : "Moafrika FM"
  }
  const playlist2 = {
    stream : "https://dreamsiteradiocp5.com/proxy/rmlesotho?mp=/stream", //radio maria 1o3.3
    image : "https://www.radiomaria.co.ls/wp-content/uploads/2018/10/LogoLS.jpg",
    station : 103.3,
    name : "Radio Maria"
  }
  const playlist3 = {
    stream : "http://102.130.114.208:8000/tsenolofm",//Tsenolo 1o4.6
    image : "https://www.tsenolofm.co.ls/images/stories/joomlart/logo.png",
    station : 104.6,
    name : "Tsenolo FM"
  }
  const playlist4 = {
    stream : "https://playerservices.streamtheworld.com/api/livestream-redirect/LESEDI.mp3",//lesedi fm 89.o
    image : "http://rojgaraurnirman.in/notes.asp?iid=137575673-lesedi+fm+live&cid=6",
    station : "89.0",
    name : "Lesedi FM"
  }
  
  
  const [radioStation, setRadioStation] = useState("Initial track");
  const [stationName, setRadioName] = useState("Airing");

  const [count, setCount] = useState(0)
  //const [track, setTrack] = useState()
//0
  function setPlay(state){
    
    if( state != playState || state === false)
    {
      setplayPause(pause);
      setPlayState(true);
      if(state === false){
        if(count === 0){
          setCurrent(playlist.stream)
          setRadioName(playlist.name)
          setRadioName(playlist.name)
          setImage(playlist.image)
          setRadioStation(playlist.station)
          setCount(count + 1)
        }
        else if(count === 1){
          setCurrent(playlist1.stream)
          setRadioName(playlist1.name)
          setImage(playlist1.image)
          setRadioStation(playlist1.station)
          setCount(count + 1)
        }
        else if(count === 2){
          setCurrent(playlist2.stream)
          setRadioName(playlist2.name)
          setImage(playlist2.image)
          setRadioStation(playlist2.station)
          setCount(count + 1)
        }
        else if(count === 3){
          setCurrent(playlist3.stream)
          setRadioName(playlist3.name)
          setImage(playlist3.image)
          setRadioStation(playlist3.station)
          setCount(count + 1)
        }
        else if(count === 4){
          setCurrent(playlist4.stream)
          setRadioName(playlist4.name)
          setImage(playlist4.image)
          setRadioStation(playlist4.station)
          setCount(0);
        }
        setPlayState(false);
      }
      
    }
    else if (state != false)
    {
      setplayPause(play);
      setPlayState(false);
      setCurColor('#ffffff39');
    }
    if(start === playPause){
      Alert.alert("♥Smart•Go" , "Settings imported. Make sure you have an active internet connection.")
    }
    playSound(!playState)
  }

  const [picture, setPicture] = useState(require("./assets/BG3.jpg"))
  const [icons, setIcon] = useState(<Ionicons name="ios-partly-sunny-outline" size={31} color="ghostwhite" />)
  const [lover, setLover] = useState(<Ionicons name="heart-dislike-outline" size={31} color="ghostwhite" />)
  
  const [states, setStates] = useState(false)
  const [love, setLove] = useState(false)
  const [curColor, setCurColor] = useState('#ffffff39')
  const [Theme, setTheme] = useState('light')
  const [radioImage, setRadioImage] = useState(<Image style = {{ height: 255, width: 255}} source={{uri: curImg}} />);
  
  function changeTheme(){

    if(states === false){
      setIcon(<Ionicons name="ios-partly-sunny" size={31} color="#f72585" />)
      setCurColor("#f72585");
      setPicture(require("./assets/SplashScreen.png"))
      setTheme("dark")
      setStates(true)
      setImage("example.mp3.com/")
      
    }
    else{
      setIcon(<Ionicons name="ios-partly-sunny-outline" size={31} color="ghostwhite" />)
      setCurColor("#ffdab9");
      setPicture(require("./assets/BG3.jpg"))
      setTheme("light")
      setStates(false)
    }
  }
  function Lover(){

    if(love === false){
      if(Theme === "light"){
        setLover(<AntDesign name="heart" size={31} color = "#ffdab9" />)
      }
      else{
        setLover(<AntDesign name="heart" size={31} color = "#f72585" />)
      }
      setLove(true)
    }
    else{
      setLover(<Ionicons name="heart-dislike-outline" size={31} color="ghostwhite" />)
      setLove(false)
    }
  }
  function minus(){
    if(count != 0 && count > 0){
      setCount(count - 1)
      setPlay(false)
    }
    
  }
  
  return(
    <ImageBackground source={picture} style={styles.container}>
      <StatusBar backgroundColor={'#4a4e69'} />
      <View style = {styles.header}>
      </View>
        <View style = {{flexDirection: 'column', height: 98}}>
          
            <View style = {{ marginLeft: 35, width: 'auto', height: 35, marginVertical: 5}}>
            <Text style = {styles.station}><Text style = {{fontSize: 35-15}}>Current Station:</Text> "<Text style = {{color: '#f08080', fontWeight: 'bold', fontSize: 17}}>{stationName}</Text>"</Text>
            </View>
            <View style = {{marginLeft: 35, width: 'auto', height: 35, marginVertical: 5}}>
              <Text style = {[styles.station, {fontSize: 35-15}]}>Streaming: {radioStation}</Text>
            </View>
            
      </View>
    <ImageBackground style = {styles.body}>


    <Image style = {{ height: 255, width: 255}} source={{uri: curImg}} />



    </ImageBackground>
      <View style = {styles.footer}>

      <TouchableOpacity
          onPress={() => 
            {
              Lover()}
            }
          style = {{marginRight: 35}} >
          {lover}
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => 
          {
            minus()
            }
          }
        style = {{marginRight: -19 - 11}}>

          <Entypo name="controller-jump-to-start" size={34} color="ghostwhite" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setPlay(true)}}
          style = {{height: 90, width: 90, marginHorizontal: 55, backgroundColor: curColor, borderRadius: 35, justifyContent: 'center', alignItems: 'center',}}>
          {playPause}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => 
            {
              setPlay(false)}
            }
          style = {{marginLeft: -19 - 11}} >
          <Entypo name="controller-next" size={34} color="ghostwhite" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => 
            {
              changeTheme()}
            }
          style = {{marginLeft: 35}} >
          {icons}
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    justifyContent: 'center',
    alignItems: 'center',
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