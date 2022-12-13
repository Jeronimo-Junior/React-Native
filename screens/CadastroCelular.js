import { useState } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';









export default function CadastroCelularScreen({ navigation }) {

    const [celularNome, setCelularNome] = useState("");
    const [armazenamento, setArmazenamento] = useState("");
    const [valor, setValor] = useState("");

    function cadastrarCelular(){
        axios.post("http://10.0.0.104:4500/phone/save"),
        {celular_nome:celularNome, armazenamento:armazenamento,valor:valor}.then((idcelulares)=>{

        })
    }




    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View>
                <Header backgroundColor='#666'
                    leftComponent={<BackButton navigator={navigation} componentName="HomeScreen" />}
                    centerComponent={{ text: 'USUARIO', style: { color: '#000' } }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Input
                    placeholder='nome'
                    value={celularNome}
                    onChangeText={value => setCelularNome(value)}
                />
                <Input
                    placeholder='Armazenamento'
                    value={armazenamento}
                    onChangeText={value => setArmazenamento(value)}
                />
                <Input
                    placeholder='Valor'
                    value={valor}
                    onChangeText={value => setValor(value)}
                    

                />
                <Button title='Salvar' onPress={cadastrarCelular} buttonStyle={styles.buttonSalvar}></Button>
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