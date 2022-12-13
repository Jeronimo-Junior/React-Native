import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Input, Image, Button, ListItem, Avatar, Header, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FlashMessage, { showMessage } from "react-native-flash-message";


export default function Inserir({ route, navigation }) {

    const [celularNome, setCelularNome] = useState("");
    const [armazenamento, setArmazenamento] = useState("");
    const [valor, setValor] = useState("");

    function inserir(){
        axios.post("http://10.0.0.104:4500/phone/save",{celular_nome:celularNome, armazenamento: armazenamento, valor: valor}).then(()=>{
            showMessage({
                message: "Item cadastrado com sucesso",
                type: "success"
            })
           
        })
    }




    



    return (
        <View style={{ alignItems: 'center' }}>

            <Header backgroundColor='#666'
                centerComponent={{ text: 'INSERIR', style: { color: '#fff' } }}
                leftComponent={<Button title="<" onPress={() => navigation.navigate('ListarScreen')}>

                </Button>}
            />
            <Text>Modelo do celular</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} 
            onChangeText={value => setCelularNome(value)}
                value={celularNome}>
            </TextInput>
            <Text>Capacidade de Armazenamento</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} 
            onChangeText={value => setArmazenamento(value)}
                value={armazenamento}></TextInput>

            <Text>Valor</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} 
            onChangeText={value => setValor(value)}
                value={valor}></TextInput>

            <Button title="Salvar Dados" style={{ paddingTop: 20, width: 300 }} onPress={inserir}></Button>

            <FlashMessage position="top"></FlashMessage>
        </View>
    )
}