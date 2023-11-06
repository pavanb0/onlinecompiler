import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ip from "../ip";

function Terminal ({editorText}){
    const [response, setResponse] = React.useState('');
    const endpoint = `http://${ip}:8080/compiler`;
    const onScreenFocus = React.useCallback(() => {
        // 
        if (editorText === '') {
            setResponse('No code to run');
        }else{
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({language: "python",
            code: editorText
            })
        })
        .then(response => response.json())
        .then(data => {
            setResponse(data.output)
        })
        .catch(error => {
            console.log(error);
        })
    }
    }, [editorText]);
    useFocusEffect(
        onScreenFocus
    )

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{response}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#282822",
        alignItems: "center"
    },
    text: {
        color: "#229b79",
        fontSize: 20,
        margin: 10,
       
    }
    
});
export default Terminal;