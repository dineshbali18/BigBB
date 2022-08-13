import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
// const { performance } = require('perf_hooks');
import DropDownPicker from 'react-native-dropdown-picker';
import { StyleSheet, Text, View,ScrollView, Button, AppRegistry, Alert} from 'react-native';
import VoteTelugu from './VoteTelugu'
// import { Actions } from 'react-native-router-flux';
import { focusProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
// import LoadNames from '../../../baliBB/oComponents/chatCompo/LoadNames';


export default function Home({route,navigation}) {
  // console.log("/////////////////////////////")
  // console.log(route.params.token);
  const[token,setToken]=useState(route.params.token.current);
  const[userId,setUserId]=useState(route.params.userId.current)
  const [role,setRole]=useState(route.params.role.current)


 const [myArray, setMyArray] = useState([]);
 const [open, setOpen] = useState(false);
 const [value, setValue] = useState(null);

  const [items,setItems]=useState([
    {label: 'Telugu', value: 'telugu'},
    {label: 'Hindi', value: 'hindi'},
    {label: 'Tamil', value: 'tamil'},
]);


  return (
    <>
    <View style={styles.container}>
      <Text>Choose your Language</Text>
      <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
<Text/>
<Text/>
</View>
{role==1?<>
  <Button color="#ff5c5c"  title="Admin" onPress={()=>{navigation.navigate('Admin',{token,userId,role})}}/>
</>:<></>}
<Button color="#ff5c5c"  title="Vote" onPress={()=>{navigation.navigate('VoteTelugu',{token,userId,role})}}/>
{/* <Button color="#ff5c5c"  title="Chat" onPress={()=>{Actions.loadnames({token,userId,role})}}/> */}



      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
