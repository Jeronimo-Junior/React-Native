import { View } from 'react-native';
import { Input, Image, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';




export default function HomeScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    function login(){
            axios.post("http://10.0.0.104:4500/user/login", {email}).then((response)=>{
                if(response.data.length && response.data[0].user_password===senha) {
                    navigation.navigate('ListarScreen')
                }else{
                    console.log("Senha incorreta")
                }
            })
    }


    
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                source={require('../Imagens/profile.png')}

            />
            <Input
                placeholder='Email'
                value={email}
                keyboardType="email-address"
                onChangeText={value => setEmail(value)}
            />
            <Input
                value={senha}
                placeholder='Senha'
                secureTextEntry={true}
                onChangeText={value => setSenha(value)}

            />
            <Button title='Login' onPress={login} buttonStyle={styles.buttonLogin} disabled={!email || !senha}></Button>
            <Button onPress={() => navigation.navigate('CadastroUsuarioScreen')} title='Cadastre-se' buttonStyle={styles.buttonSenha}></Button>
        </View>
    );

}

const styles = StyleSheet.create({
    buttonLogin: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'blue',
        marginBottom: 10,
        width: 150
    },
    buttonSenha: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'red',
    }
});

//Próxima atividade
//onPress={() => navigation.navigate('ListaContatos')}
//onPress={() => navigation.navigate('CadastroUsuario')}