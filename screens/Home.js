import { View } from 'react-native';
import { Input, Image, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import React, {useState} from 'react';




export default function HomeScreen({ navigation }) {
    const [contador, setcontador] = useState(0);
    
    
    
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                style={{ width: 200, height: 200, borderRadius: 200 / 2 }}
                source={require('../Imagens/profile.png')}

            />
            <Input
                placeholder='Email'
                keyboardType="email-address"
            />
            <Input
                placeholder='Senha'
                secureTextEntry={true}

            />
            <Button title='Login' buttonStyle={styles.buttonLogin}></Button>
            <Button onPress={() => navigation.navigate('CadastroUsuarioScreen')} title='Cadastre-se' buttonStyle={styles.buttonSenha} ></Button>
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