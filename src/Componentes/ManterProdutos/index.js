import { View, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput, HelperText } from 'react-native-paper';
import { estilos } from "./estilos";
import { useState } from "react";
import { cadastrarProdutos, atualizarProdutos } from "../../servicos/firestore";

export function ManterProdutos({ navigation, route }) {
    const [nomeCarro, setnomeCarro] = useState(route?.params?.nomeCarro)
    const [fabricante, setfabricante] = useState(route?.params?.fabricante)
    const [anoFabrica, setanoFabrica] = useState(route?.params?.anoFabrica)
    const [statusErro, setStatusErro] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    async function salvarProduto() {
        if (nomeCarro == '') {
            setStatusErro('Descricao')
            setMensagemErro('O campo não pode ser vazio')
        } else if (fabricante == '') {
            setStatusErro('Preco')
            setMensagemErro('O produto deve ter um valor')
        } else {
            setStatusErro('')
            let resultado = ''
            if (route?.params) {
                resultado = await atualizarProdutos(route?.params?.id, { nomeCarro, fabricante })
            }
            else {
                resultado = await cadastrarProdutos({ nomeCarro, fabricante })
            }
            if (resultado == 'erro') {
                Alert.alert('Erro ao cadastrar produto')
            } else {
                setnomeCarro('')
                setfabricante('')
                navigation.navigate('Listar') 
            }
        }
    }
    return (
        <View style={estilos.container}>
            <TextInput
                label="Modelo do Carro"
                value={nomeCarro}
                onChangeText={setnomeCarro}
                mode="outlined"
                error={statusErro == 'Modelo do Carro'}
                style={estilos.input} />
            {statusErro == 'Modelo do Carro' ? <HelperText type="error" visible={statusErro == 'Modelo do Carro'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Fabricante"
                value={fabricante}
                onChangeText={setfabricante}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Fabricante' ? <HelperText type="error" visible={statusErro == 'Fabricante'}>
                {mensagemErro}
            </HelperText> : null}
            <TextInput
                label="Ano de Fabricação"
                value={anoFabrica}
                keyboardType="numeric"
                onChangeText={setanoFabrica}
                mode="outlined"
                style={estilos.input} />
            {statusErro == 'Ano de Fabricação' ? <HelperText type="error" visible={statusErro == 'Ano de Fabricação'}>
                {mensagemErro}
            </HelperText> : null}
            <TouchableOpacity
                style={estilos.botao} onPress={() => salvarProduto()}>
                <Text style={estilos.texto}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}