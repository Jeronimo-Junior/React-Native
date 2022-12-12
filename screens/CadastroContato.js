import * as React from 'react';
import { View } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';








export default function CadastroContatoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, flexDirection: "column" }}>
            <View>
                <Header
                    leftComponent={<BackButton navigator={navigation} componentName="HomeScreen" />}
                    centerComponent={{ text: 'USUARIO', style: { color: '#fff' } }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Input
                    placeholder='Email'
                    keyboardType="email-address"
                />
                <Input
                    placeholder='Senha'
                    secureTextEntry={true}

                />
                <Button title='Salvar' buttonStyle={styles.buttonSalvar}></Button>
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