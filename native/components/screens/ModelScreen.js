import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Dimensions} from 'react-native'
import React from 'react'

const options=['Kingman','Lindsborg','Lyons','Medicine Lodge','Phillipsburg','Scott City','St.John'];
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ModelScreen = (props) => {

    const onPressItem=(option)=>{
        props.changeModalVisibility(false);
        props.setData(option)
    }
    const option= options.map((item,index)=>{
        return <TouchableOpacity 
                    key={index}
                    onPress={()=>onPressItem(item)}
                    style={styles.option}
                >
            <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
    })

  return (
   <TouchableOpacity style={styles.container}>
        <View style={styles.model}>
            <ScrollView>
                <Text style={styles.header}>SELECT PREFERRED STORE</Text>
                {option}
            </ScrollView>
        </View>
   </TouchableOpacity>
  )
}

export default ModelScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        },
        model:{
            backgroundColor:'white',
            borderRadius:10,
            borderRadius:25,
            height:400
        },
        option:{
            alignItems:'flex-start',
            backgroundColor:'whitesmoke',
            width:250,
           borderBottomWidth:0.5,
           borderBottomColor:'grey',
          borderColor:'red'
        
        },
        text:{
            margin:5,
            fontSize:10,
            fontWeight:'bold',
          
          
        },
        header:{
            color:'white',
            textAlign:'center',
            backgroundColor:'red',
            padding:10,
            borderTopRightRadius:10,
            borderTopLeftRadius:10
        }
})