import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Input, Image, Button, ListItem, Avatar, Header, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message"; import { showMessage } from 'react-native-flash-message';


export default function Inserir({ route, navigation }) {

    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getCpf, setCpf] = useState();




    async function inserirDados() {

        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf
        }).then(function (response) {
            showMessage({
                message: "Registro salvo com sucesso",
                type: "success"
            })
        }).catch(function (error) {
            console.log(error);

        });

    }




    return (
        <View style={{ alignItems: 'center' }}>

            <Header
                centerComponent={{ text: 'INSERIR', style: { color: '#fff' } }}
                leftComponent={<Button title="<" onPress={() => navigation.navigate('ListarScreen')}>

                </Button>}
            />
            <Text>Digite seu Nome</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setNome(text)}
                value={getNome}>
            </TextInput>
            <Text>Digite seu Telefone</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setTelefone(text)}
                value={getTelefone}></TextInput>

            <Text>Digite seu Cpf</Text>
            <TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setCpf(text)}
                value={getCpf}></TextInput>

            <Button title="Salvar Dados" style={{ paddingTop: 20, width: 300 }} onPress={() => inserirDados()}></Button>

            <FlashMessage position="top"></FlashMessage>
        </View>
    )
}