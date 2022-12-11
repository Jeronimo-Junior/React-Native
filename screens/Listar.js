import { View } from 'react-native';
import { Input, Image, Button, ListItem, Avatar, Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { TextElement } from 'react-native-elements/dist/text/Text';
import { useIsFocused } from '@react-navigation/native';


export default function ListarScreen({navigation}) {

    
    const [list,setList]=useState([]);
    const refresh = useIsFocused(); 
    useEffect(() =>{
        function consultarDados(){
    
            axios.get('http://professornilson.com/testeservico/clientes')
            
            .then(function (response) {
            console.log(response);
                setList(response.data);
            }).catch(function (error) {
            console.log(error);
            
            });
        }
        consultarDados();

    },[refresh])

    return (


        <View>
            <Header
                    centerComponent={{ text: 'LISTAR', style: { color: '#fff' } }}
                    rightComponent={ <Button title="+" onPress={() => navigation.navigate('InserirScreen')}>
                        
                    </Button> }
                />
            <ScrollView>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider  onPress={()=> navigation.navigate('AlterarScreen', {
                        nome:l.nome,
                        telefone:l.telefone,
                        cpf:l.cpf,
                        id:l.id
                    })}>
                        <Avatar source={{ uri: "https://gravatar.com/avatar/53aa1f9f89c230a19a4f13626f83e864?s=400&d=robohash&r=x" }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.nome}</ListItem.Title>
                            <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            </ScrollView>
        </View>
    )
}