import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform,StyleSheet, Text, View,ScrollView, Button, AppRegistry, Alert,Image,ImageBackground,SafeAreaView, TouchableOpacity} from 'react-native';
// import VoteTelugu from './VoteTelugu'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames'

export default function VoteTelugu({navigation}) {
    
    return (
        <>
         <SafeAreaView>
          <ScrollView>
           <View> 
           <View>
          <Image
          style={{width: wp('100%'), height:hp('102%'),resizeMode:'cover'}}
        source={require('../../images/bb.png')}/>
        </View>
        {/* <Image source={{uri:'https://i.imgur.com/Rwk9FrE.png'}} style={{resizeMode: 'cover',width: '100%', height: '89.25%',zIndex:100}}/> */}
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 80}}>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{marginLeft:wp('8%')}}>
        <TouchableOpacity style={tw`h-10 w-32 rounded-full ml-2 border-indigo-600 bg-yellow-600 justify-center pl-10 flex-row p-2`}   onPress={() =>
        navigation.navigate('SignIn')
      } >
           <Text style={tw`text-white font-bold`}>  SignIn </Text>
           <Image source={require('../../images/next.png')} style={tw`h-5 w-5 mt-1 ml-1`}/>
           </TouchableOpacity>
           </View>
           <View style={{marginLeft:wp('10%')}}>
           <TouchableOpacity style={tw`h-10 w-32 rounded-full ml-2 border-indigo-600 bg-yellow-600 justify-center pl-10 flex-row p-2`} onPress={()=>{navigation.navigate('SignUp')}} >
           <Text style={tw`text-white font-bold `}>  SignUp </Text>
           <Image source={require('../../images/next.png')} style={tw`h-5 w-5 mt-1 ml-1`}/>
           </TouchableOpacity>
           </View>
           </View>
            {/* <Button title="SignUp" onPress={()=>{Actions.signup()}}/>
            <Button title="SignIn" onPress={()=>{Actions.signin()}}/> */}
            </View>
            </View>
            </ScrollView>
      </SafeAreaView>
        </>
    )
}


const votestyles = StyleSheet.create({
    container: {
      marginTop:20,
      padding: 20,
      flex: 1,
      backgroundColor: '#FDFEFE',
    }
  });