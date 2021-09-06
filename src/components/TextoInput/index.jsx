import React from 'react';
import {
  TextInput,
  View
} from 'react-native';
import { styles } from "./styles";

const props = {
  placeholder: "",
  autoCapitalize: "",
  secureTextEntry: "",
  value: "",
  onChangeText: "",
}

export function TextoInput({placeholder, autoCapitalize, secureTextEntry, value, onChangeText} = props){
  return(
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder={ placeholder } 
      autoCapitalize={ autoCapitalize } 
      secureTextEntry={ secureTextEntry }
      value={ value }
      onChangeText={ onChangeText }

      />
    </View>
  );
}