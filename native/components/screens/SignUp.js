
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal,ScrollView, TextInput, Pressable,SafeAreaView,TouchableOpacity,} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import ModelScreen from './ModelScreen';



const SignUp=({navigation})=>{
 const [chooseData,setChooseData] = useState('Preferred store');
 const [isModalVisible,setIsModalVisible] = useState(false);

 const changeModalVisibility=(bool)=>{
    setIsModalVisible(bool)
 }
const setData=(option)=>{
    setChooseData(option)
}
    return (
            <ScrollView >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'white'}}>

            {/* <View style={styles.container}> */}
                {/* <View style={styles.back}>
                    <FontAwesomeIcon name="angle-left" style={styles.icon} />  
                    <Text style={styles.header}>SIGN UP</Text>
                </View> */}
             <View>
            <Image  source={{uri:'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/0f/db/6a/0fdb6a1f-68ee-1562-2094-a0bcf8c82aa4/WhiteFoodLiner-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.webp'}} style={styles.img}/>
        </View>
     
      <Pressable  style={styles.button} onPress={()=>navigation.navigate('SCAN PRODUCT')}>
        <Text style={styles.text}>CLICK HERE TO </Text>
        <Text style={styles.text}>SCAN YOURWHITE'S </Text>
        <Text style={styles.text}>FOODLINERREWARD CARD BARCODE</Text>
        <Text style={styles.text}>BARCODE</Text>
    </Pressable>
    <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter Card Number" />
        <TextInput style={styles.input}placeholder="Confirm Card Number" />
     </View>
     <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input}placeholder="Last Name" />
     </View>
    <View>
        <TextInput style={styles.input2} placeholder="Zip Code (5 digits only)" keyboardType="numeri" />
    </View>

<View>
    
<TouchableOpacity style={styles.storeinput} onPress={()=>changeModalVisibility(true)}>
        <Text style={styles.input3} >{chooseData}</Text>
        <FontAwesomeIcon name="angle-right" style={styles.icon2} onPress={()=>navigation.navigate('Modal')} />
        </TouchableOpacity>
     <Modal
        transparent={false}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={()=>changeModalVisibility(false)}
     >
        <ModelScreen changeModalVisibility={changeModalVisibility} setData={setData} />
     </Modal>

       

</View>



    <View style={styles.inputBoxContainer}>
        <TextInput style={styles.inputBox} placeholder="Email Address" />
        <FontAwesomeIcon name="check-circle" style={{color:'red',fontSize:20}} />
    </View>

    <Text style={{textAlign:'start'}}>(This will be your username)</Text>
        
   






    <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Password"  secureTextEntry={true} />
        <TextInput style={styles.input}placeholder="Confirm Password"  secureTextEntry={true} />
     </View>
           
    <Pressable  style={styles.buttonSubmit}>
        <Text style={styles.text}>SUBMIT</Text>
    </Pressable>
     <Pressable  style={styles.buttonCancel}>
        <Text style={styles.text}>CANCEL</Text>
    </Pressable>
         
</View>
{/* </View> */}
 </ScrollView>
    
      
    );
}

export default SignUp;


const styles= StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
},
back:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'grey',
    padding:10,
    justifyContent:'space-around'
},
header:{
    textAlign:'center',
 
    fontSize:20,
    width:380,
   
},
icon:{

  fontSize:20,

  
},


img:{
    width:200,
    height:200,
    marginBottom:5,
    display:'flex',
    alignContent:'stretch'
},
inputContainer:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
    marginBottom:10
    

},
input2:{
    width:200,
    borderWidth:1,
    backgroundColor:'white',
    marginTop:20,
    width:370,
    height:50,
    borderRadius:10,
    padding:10
},
input:{
    width:200,
    borderWidth:1,
    backgroundColor:'white',
    marginRight:10,
    width:180,
    height:50,
    borderRadius:10,
    padding:10
},
buttonContainer:{
    marginTop:10,
    marginBottom:10,
    padding:20
},
input3:{

flex:1,
justifyContent:'flex-end',
textAlign:'start',
color:'red',
fontSize:15

},
storeinput:{
  
    borderWidth:1,
    backgroundColor:'white',
    marginTop:20,
    height:50,
    borderRadius:10,
    width:370,
    // textAlign:'start',
    color:'red',
    padding:20,
    alignItems:'flex-end',
    flexDirection:'row',
    alignSelf:'stretch'
},
icon2:{
   fontSize:15
},
button:{
    backgroundColor:'black',
    width:370,
    height:150,
    textAlign:'center',
 
    borderRadius:10,
    fontSize:35,
    paddingVertical:30
},
text:{
    color:'white',
    textAlign:'center'
},
buttonSubmit:{
    backgroundColor:'black',
    width:370,
    height:50,
    flex:1,
    alignItems:'center',
    marginTop:30,
    padding:10,
    borderRadius:10,
    paddingVertical:10,


},
buttonCancel:{
    backgroundColor:'red',
    width:370,
    height:50,
    flex:1,
    alignItems:'center',
    marginTop:20,
    padding:10,
    borderRadius:10,
    paddingVertical:10,
    
},
inputBoxContainer:{
    alignItems:'center',
    flexDirection:'row',
   borderWidth:1,
    width:370,
    paddingHorizontal:10,
    height:50,
  
    marginTop:20,
  
    borderRadius:10,
    padding:10
},
inputBox:{
    flex:1,
    marginHorizontal:10,
    height:50,
    
    outlineWidth: 0,

}
})