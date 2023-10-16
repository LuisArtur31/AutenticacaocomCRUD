import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cadastrar } from "./src/Componentes/CadastrarLogin";
import { ListarProdutos } from "./src/Componentes/ListarProdutos";
import { Login } from "./src/Componentes/Login";
import { ManterProdutos } from "./src/Componentes/ManterProdutos";

export function Rotas() {
    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name = 'Login' component={Login}/>
                <Stack.Screen name = 'Cadastrar' component={Cadastrar}/>
                <Stack.Screen name = 'Manter' component={ManterProdutos} options={{title: 'Cadastrar/Atualizar Veículo'}}/>
                <Stack.Screen name = 'Listar' component={ListarProdutos} options={{title: 'Cadastro de Veículos'}}/>  
            </Stack.Navigator>
        </NavigationContainer>
    )
}