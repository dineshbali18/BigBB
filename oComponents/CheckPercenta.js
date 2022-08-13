import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useRef} from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
// import { Platform,StyleSheet, Text, View,ScrollView, Button, AppRegistry, Alert,Image} from 'react-native';
import {Dimensions, Platform,StyleSheet, Text, View,ScrollView, Button, AppRegistry, Alert,Image,TouchableOpacity} from 'react-native';
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph'
// const HorizontalBarGraph = React.lazy(() => import('@chartiful/react-native-horizontal-bar-graph'));
import tw from 'tailwind-rn'

// import VoteTelugu from './VoteTelugu
import { getNamesWithPercentages} from './helper/apicalls';
// import { Actions } from 'react-native-router-flux';
import VoteTelugu from './VoteTelugu';
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const screenWidth = Dimensions.get("window").width;

export default function CheckPercenta({routes,navigation}) {


    const [names,setNames]=useState([])
    const [percentages,setPercentages]=useState([])
    const [colors,setColors]=useState(['#00CDAC','#FC4F4F','#FF0063','#A890FE','#4D96FF','#FF9F29','#F8CB2E','#DD2476','#FF1818','#D82148','#C69B7B','#03045E','#EB4A5F','#393E46','#7b2cbf','#5390d9','#540d6e','#dddf00','#ba181b','#abc4ff','#8f2d56','#e2c2ff','#80b9ff','#011627'])
    const [checkD,setCheckD]=useState(0)


    const loadAllProduct = async() => {
        await getNamesWithPercentages().then(data => {
          // console.log(data);
          if (data.error) {
            console.log(data.error);
          } else {
            setNames(data.names)
            setPercentages(data.percentages)
            // console.log("hiih")
            setCheckD(1)
          }
        });
      };

        

    useEffect(()=>{
        loadAllProduct();
    },[]);


    return (
      <>
 <View> 
   {checkD==1?
   <SafeAreaView>
    <ScrollView>
    <View>
<View>
{percentages.map((percentage,index)=>{
  // console.log(index)
  return (
    <>
    <View key={index}>
    <Text style={{marginLeft:'10%',fontSize:25}}>{names[index]}({percentage.toFixed(2)}%)</Text>
    <View >
      <View  style={{height: 20,
   flexDirection: "row",
   width: widthPercentageToDP('80%'),
   marginLeft:widthPercentageToDP('10%'),
   marginBottom:heightPercentageToDP('3%'),
   backgroundColor: 'white',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5}}>
      {/* <Text>{colors[index]}</Text> */}
        <TouchableOpacity style={{width:widthPercentageToDP(percentage),backgroundColor:colors[index]}}/>
      </View>
      </View>
      </View>
    </>
  )
})}
</View>
</View>
    
</ScrollView>
    </SafeAreaView>:<><View><Text style={{color:'green', height:'20%',fontWeight:'bold',marginLeft:'40%',marginTop:'50%'}} >Loading..........</Text>    
    </View></>}
  </View>
</>
  );
}


const styles = StyleSheet.create({
  chart: {
    marginBottom: 30,
    padding: 10,
    paddingTop: 20,
    borderRadius: 20,
    width: 375,
    backgroundColor: '#B1E693'
  }
});

const votestyles = StyleSheet.create({
  container: {
      // marginTop:20,
    // padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  backbutton:{
      marginTop:1,
      width:100,
  }
});