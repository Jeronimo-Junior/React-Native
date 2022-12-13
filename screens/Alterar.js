import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Input, Image, Button, ListItem, Avatar, Header, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FlashMessage, { showMessage } from "react-native-flash-message";



export default function Alterar({ route, navigation }) {

    const [celularNome, setCelularNome] = useState("");
    const [armazenamento, setArmazenamento] = useState("");
    const [valor, setValor] = useState("");
    const [id, setId] = useState("");


    function alterar(){
        axios.put("http://10.0.0.104:4500/phone/update",{celular_nome:celularNome, armazenamento:armazenamento,valor:valor,idcelulares:id}).then(()=>{
            showMessage({
                message: "Item alterado com sucesso",
                type: "success"
            })
        })
    }

    function excluir(){
        axios.delete("http://10.0.0.104:4500/phone/delete",{data:{idcelulares: id}}).then(()=>{
            showMessage({
                message: "Item deletado com sucesso",
                type: "success"
            })
        })
    }

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { armazenamento } = route.params;
            const { valor } = route.params;
            const { id } = route.params;

            setCelularNome(nome);
            setArmazenamento(armazenamento);
            setValor(valor);
            setId(id);
        }
    },[])

    




    return (
        <View style={{ alignItems: 'center' }}>
            <FlashMessage position="top"></FlashMessage>
            <Header backgroundColor='#666'
                    centerComponent={{ text: 'ALTERAR', style: { color: '#fff' } }}
                    leftComponent={ <Button backgroundColor='#666' title="<" onPress={() => navigation.navigate('ListarScreen')}>
                        
                    </Button> }
                />

            <Text>Digite o nome do celular</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} 
            onChangeText={value => setCelularNome(value)}
                value={celularNome}>
            </TextInput>
            <Text>Digite o armazenamento</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onChangeText={value => setArmazenamento(value)}
                value={armazenamento}></TextInput>

            <Text>Digite o valor</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onChangeText={value => setValor(value)}
                value={valor}></TextInput>

            <Button title="Alterar" style={{ paddingBottom:30 , width: 300 }} onPress={alterar}></Button>

            <Button title="Excluir" style={{ paddingTop: 20, width: 300 }} onPress={excluir}></Button>

        </View>
    )
}