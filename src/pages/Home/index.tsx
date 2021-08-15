import React from 'react';
import { Text } from 'react-native';

import HomeImage from '../../images/HomeImage.png';

import { Container, ImageHome, Title, ButtonStart, ButtonStartText } from './styles';

export default function Home(){
    return(
        <Container>
            <Title>DEV-SHIRT</Title>
            <ImageHome source={HomeImage}/>
            <ButtonStart>
                <ButtonStartText>Vamos começar</ButtonStartText>
            </ButtonStart>
        </Container>
    )
}