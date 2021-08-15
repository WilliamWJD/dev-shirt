import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import ButtonNext from '../../components/ButtonNext';

import { Container, Title, InputAccount} from './styles';
import { Alert } from 'react-native';

export default function AcoountEnter(){
    const [githubAccount, setGithubAccount] = useState('');

    const { navigate } = useNavigation();
    
    function handleNavigateMain(){
        if(!githubAccount){
            Alert.alert('Erro','Por favor, entre com um perfil valido do Github')
            return;
        }
        navigate("Main")
    }

    return(
        <Container>
            <Title>😉 Para começar digite o seu perfil do GitHub</Title>
            <InputAccount
                placeholder="Perfil do Github"
                onChangeText={(text:string)=>setGithubAccount(text)}
            />
            <ButtonNext
                ButtonTitle="Continuar"
                onPress={handleNavigateMain}
            />
        </Container>
    )
}