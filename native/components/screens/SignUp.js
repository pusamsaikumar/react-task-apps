
import { StyleSheet, Text, View, Image, Button,ScrollView, TextInput, Pressable} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';




const SignUp=()=>{
    // const navigation= useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView >
            <View style={styles.container}>
                <View style={styles.back}>
                   
                          <FontAwesomeIcon name="angle-left" style={styles.icon} />  
                    <Text style={styles.header}>SING UP</Text>
                </View>
             <View>
         <Image  source={{uri:'https://chambermaster.blob.core.windows.net/images/members/2810/18/MemLogo_WHITES%20LOGO.jpg'}} style={styles.img}/>
      </View>
      {/* <Button  title='CLICK HERE TO SCAN YOURWHITES FOODLINERREWARD CARD BARCODE' /> */}
      <Pressable  style={styles.button}>
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
    <TextInput style={styles.input2} placeholder="Zip Code (5 digits only)" keyboardType="numeric"
 />
    </View>
    <View style={styles.storeinput}>
    <Text style={styles.input3} >Preferred Store</Text>
    <FontAwesomeIcon name="angle-right" style={styles.icon2} />

    </View>
    <View>
    <TextInput style={styles.input2} placeholder="Email Address" secureTextEntry={true} />
    <Text style={{textAlign:'right'}}>(This will be your username)</Text>
    </View>
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
 </ScrollView>
      </View>
      
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
    width:400,
    height:200,
    marginBottom:10,
    display:'flex',
    alignContent:'stretch'
},
inputContainer:{
    flex:1,
    flexDirection:'row',
    marginTop:20,
    

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
    textAlign:'start',
    color:'red',
    padding:20,
    alignItems:'flex-end',
    flexDirection:'row'
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
    color:'white'
},
buttonSubmit:{
    backgroundColor:'black',
    width:370,
    height:50,
    flex:1,
    alignItems:'center',
    marginTop:30,
    borderRadius:10

},
buttonCancel:{
    backgroundColor:'red',
    width:370,
    height:50,
    flex:1,
    alignItems:'center',
    marginTop:20,
    borderRadius:10
}
})