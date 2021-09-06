import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import RangeSlider from "react-native-range-slider-expo";
import { tema } from "../../global/styles/tema";
import { styles } from "./styles";

export function SliderHorario() {
  const [horarioIni, setHorarioIni] = useState(0);
  const [horarioFin, setHorarioFin] = useState(0);

  const horaIni = horarioIni + ":00";
  const horaFin = horarioFin + ":00";

  return (
    <View style={styles.container}>
      <Text style={styles.txtHorario}>Horário</Text>

      <View style={styles.horarioContainer}>
        <View style={styles.horarioIni}>
          <Text style={styles.txtHorarioIni}>{horaIni}h</Text>
        </View>
        <Text style={styles.txtAte}>Até</Text>
        <View style={styles.horarioFin}>
          <Text style={styles.txtHorarioFin}>{horaFin}h</Text>
        </View>
      </View>

      <View style={styles.slider2}>
        <RangeSlider
          min={6}
          max={24}
          fromValueOnChange={(valor) => setHorarioIni(valor)}
          toValueOnChange={(valor) => setHorarioFin(valor)}
          initialFromValue={18}
          initialToValue={22}
          inRangeBarColor={tema.cores.primaria}
          fromKnobColor={tema.cores.primaria}
          toKnobColor={tema.cores.primaria}
          styleSize="small"
          valueLabelsBackgroundColor={tema.cores.primaria}
          showRangeLabels={false}
          showValueLabels={false}
          step={1}
        />
      </View>
    </View>
  );
}
