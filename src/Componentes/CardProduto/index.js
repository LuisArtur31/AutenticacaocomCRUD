import { View, Text, TouchableOpacity } from "react-native";
import { estilos } from "./estilos";
import Icon from 'react-native-vector-icons/AntDesign';
import { deletarProdutos } from "../../servicos/firestore";

export function CardProduto({ produto, navigation }) {
    return (
        <View style={estilos.container}>
            <View style={estilos.card} >
                <View style={estilos.textoContainer}>
                    <Text style={estilos.textoNome} numberOfLines={1}>{produto.nomeCarro}</Text>
                    <Text style={estilos.textoPreco}>{produto.fabricante}</Text>
                    <Text style={estilos.textoPreco}>{produto.anoFabrica}</Text>
                </View>
                <View style={estilos.buttonsContainer}>
                    <TouchableOpacity style={estilos.editButton} onPress={() => navigation.navigate('Manter', produto)}>
                        <Icon
                            name={'edit'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.deleteButton} onPress={() => deletarProdutos(produto.id)} >
                        <Icon
                            name={'delete'}
                            size={17}
                            color="#FFF"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}