import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Input, Image, Button, ListItem, Avatar, Header, Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FlashMessage from "react-native-flash-message";import { showMessage } from 'react-native-flash-message';


export default function Alterar({ route, navigation }) {

    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getCpf, setCpf] = useState();
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { cpf } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;

            setNome(nome);
            setCpf(cpf);
            setTelefone(telefone);
            setId(id);
        }
    })

    function alterarDados() {

        axios.put('http://professornilson.com/testeservico/clientes/' + getId
            ,

            {
                nome: getNome,
                telefone: getTelefone,
                cpf: getCpf
            }).then(function (response) {
                showMessage({
                    message:"Registro alterado com sucesso",
                    type:"success"
                })
            }).catch(function (error) {
                console.log(error);

            });

    }

    function excluirDados() {

        axios.delete('http://professornilson.com/testeservico/clientes/' + getId)

         

            .then(function (response) {
                showMessage({
                    message:"Registro excluído com sucesso",
                    type:"danger"
                })
                

                setNome(null);
                setCpf(null);
                setTelefone(null);
                setId(null);

            }).catch(function (error) {
                console.log(error);

            });

    }




    return (
        <View style={{ alignItems: 'center' }}>
            <FlashMessage position="top"></FlashMessage>
            <Header
                    centerComponent={{ text: 'ALTERAR', style: { color: '#fff' } }}
                    leftComponent={ <Button title="<" onPress={() => navigation.navigate('ListarScreen')}>
                        
                    </Button> }
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

            <Button title="Alterar" style={{ paddingBottom:30 , width: 300 }} onPress={() => alterarDados()}></Button>

            <Button title="Excluir" style={{ paddingTop: 20, width: 300 }} onPress={() => excluirDados()}></Button>

        </View>
    )
}