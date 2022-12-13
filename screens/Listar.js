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
    
            axios.get('http://10.0.0.104:4500/phone/')
            
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
            <Header backgroundColor='#666'
                    centerComponent={{ text: 'LISTAR', style: { color: '#fff' } }}
                    rightComponent={ <Button style={styles.button} title="+" onPress={() => navigation.navigate('InserirScreen')}>
                        
                    </Button> }
                />
            <ScrollView>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider  onPress={()=> navigation.navigate('AlterarScreen', {
                        nome:l.celular_nome,
                        armazenamento:l.armazenamento,
                        valor:l.valor,
                        id:l.idcelulares
                    })}>
                        <Avatar source={{ uri: "https://gravatar.com/avatar/53aa1f9f89c230a19a4f13626f83e864?s=400&d=robohash&r=x" }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.celular_nome}</ListItem.Title>
                            <ListItem.Subtitle>{l.armazenamento} - {l.valor}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            </ScrollView>

            
        </View>
    )
}
const styles = StyleSheet.create({
    button:{
        color:'red'
    } 
})