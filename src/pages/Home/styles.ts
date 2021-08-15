import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    justify-content: space-between;
    align-items: center;
    padding:100px 20px;
`;

export const Title = styled.Text`
    font-family: 'Bangers_400Regular';
    font-size:65px;
    color:#2f3640;
`;

export const ImageHome = styled.Image`
    width:400px;
    height:400px;
    resizeMode:contain;
`;

export const ButtonStart = styled.TouchableOpacity`
    background-color:#2f3640;
    width:200px;
    height:60px;
    border-radius:10px;

    justify-content: center;
    align-items: center;
`;

export const ButtonStartText = styled.Text`
    color:#fff;
    font-family:'Inter_700Bold';
    font-size:16px;
`;
