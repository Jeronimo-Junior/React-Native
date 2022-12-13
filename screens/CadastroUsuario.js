import React, {useState} from 'react';
import { View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import axios from 'axios';







export default function CadastroUsuarioScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    function cadastro() {
        axios.post("http://10.0.0.104:4500/user/save", { user_email:email, user_password:senha,user_name:nome }).then(() => {

            navigation.navigate('HomeScreen')

        })
    }

    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View>
                <Header backgroundColor='#666'
                    leftComponent={<BackButton navigator={navigation} componentName="HomeScreen" />}
                    centerComponent={{ text: 'USUARIO', style: { color: '#fff' } }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Input
                    placeholder='Email'
                    keyboardType="email-address"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
                <Input
                    placeholder='Senha'
                    value={senha}
                    secureTextEntry={true}
                    onChangeText={value => setSenha(value)}
                />
                <Input
                    placeholder='Nome'
                    value={nome}
                    onChangeText={value => setNome(value)}

                />
                <Button title='Salvar' onPress={cadastro} buttonStyle={styles.buttonSalvar}></Button>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    buttonSalvar: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        marginBottom: 10,
        width: 150
    },
});

//Próxima atividade
//onPress={() => navigation.navigate('ListaContatos')}
//onPress={() => navigation.navigate('CadastroUsuario')}