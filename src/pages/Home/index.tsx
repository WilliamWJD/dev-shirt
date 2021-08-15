import React from 'react';
import { useNavigation } from '@react-navigation/native';

import HomeImage from '../../images/HomeImage.png';

import { Container, ImageHome, Title } from './styles';
import ButtonNext from '../../components/ButtonNext';

export default function Home(){
    const { navigate } = useNavigation();

    return(
        <Container>
            <Title>DEV-SHIRT</Title>
            <ImageHome source={HomeImage}/>
            <ButtonNext
                ButtonTitle="Vamos começar"
                onPress={()=>navigate("AccountEnter")}
            />
        </Container>
    )
}