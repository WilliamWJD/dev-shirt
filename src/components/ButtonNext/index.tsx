import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonNextTitle} from './styles';

interface ButtonNextProps extends TouchableOpacityProps{
    ButtonTitle:string;
}

export default function ButtonNext({ ButtonTitle, ...rest }:ButtonNextProps) {
    return (
        <Container {...rest}>
            <ButtonNextTitle>{ButtonTitle}</ButtonNextTitle>
        </Container>
    )
}