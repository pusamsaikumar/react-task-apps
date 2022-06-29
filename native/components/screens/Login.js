import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

const Login=({navigation})=>{
    return (
        <View>
            <Text> Login </Text>
            <Button  title="signup" onPress={()=>navigation.navigate('SING UP')}/>
            <Button  title="scan product" onPress={()=>navigation.navigate('SCAN PRODUCT')}/>
        </View>
    );
}

export default Login;