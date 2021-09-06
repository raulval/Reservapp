import React from 'react';
import {
  Text
} from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { styles } from "./styles";

const props = {
  title: "",
  onPress: "",
}

export function BotaoLogin({title, onPress} = props){
  return(
    <RectButton 
    style={styles.botao} 
    onPress={ onPress }
    >
      <Text style={styles.texto}>
        { title }
      </Text>
    </RectButton>
  );
}

