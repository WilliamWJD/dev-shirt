import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Bangers_400Regular,
} from '@expo-google-fonts/bangers';

import { Inter_700Bold } from '@expo-google-fonts/inter';

import Home from './src/pages/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}
