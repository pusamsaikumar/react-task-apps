import { StyleSheet, Text, View, Button,Pressable,Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import React,{useState,useEffect} from 'react'

export default function Scanner({navigation}) {
    const [hasPermission,setHasPermission] = useState(null);
    const [scanned,setScanned] = useState(false);
    const [text,setText] = useState('Not Yet Scanned');
    useEffect(()=>{
        (async ()=>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted' )
        })();
    },[])

    const handleBarCodeScanned = ({type,data})=>{
        setScanned(true);
        setText(data)
        //alert(`Bar Code with Type ${type} and Data ${data} has been Scanned. `);
        alert(`Bar Code with Type ${type} and Data ${Linking.openURL(`${data}`)} has been Scanned. `)
    };
    if(hasPermission === null){
        return <Text>Requesting For Camera Permission</Text>
    }
    if(hasPermission === false){
        return <Text>No Access To Camera </Text>
    }

  return (
    <View style={styles.container}>
      
      
          <Text style={{backgroundColor:'whitesmoke' , fontSize:40 , textAlign:'center',width:400}}>Scan:N/A</Text>
         
        <Text style={{marginBottom:0}}>Place a barcode inside the viewfinder rectangle to scan it.</Text>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned }
            style={{width:300,height:400,margin:20}}
        />
        {
            scanned && <Button title='Tap to Scan Again' onPress={()=> setScanned(false)} />
        }
        <Text>Details of Product: {text}</Text>
        <Pressable  style={styles.buttonCancel}  onPress={()=>navigation.navigate('SING UP')}>
            <Text style={styles.text}>CANCEL</Text>
        </Pressable>
         
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'column'
    },
    text:{
        color:'white',
        textAlign:'center',
        backgroundColor:'red',
        width:400,
        height:50,
        padding:10
    },
})