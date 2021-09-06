import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { RectButton } from "react-native-gesture-handler";
import RangeSlider from "react-native-range-slider-expo";
import { tema } from "../../global/styles/tema";
import { styles } from "./styles";

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

const dataInicial = Date();

export function Reservar({ route }) {
  const navigation = useNavigation();
  const { nome_usuario } = route.params;
  const [pessoas, setPessoas] = useState(null);
  const [horarioIni, setHorarioIni] = useState(0);
  const [horarioFin, setHorarioFin] = useState(0);
  const [selecionado, setSelecionado] = useState(dataInicial);
  const datasMarcadas = {
    [selecionado]: {
      selected: true,
      selectedColor: tema.cores.textos,
    },
  };

  const horaInicial = horarioIni + ":00";
  const horaFinal = horarioFin + ":00";

  const selecionaDia = (dia) => {
    setSelecionado(dia.dateString);
  };

  function navegarReservar2() {
    navigation.navigate("Reservar2", {
      nome_usuario: nome_usuario,
      pessoas: pessoas,
      dataSelecionada: selecionado,
      horaIni: horaInicial,
      horaFin: horaFinal,
    });
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.wrapper}>
        <Text style={styles.semititulo}>Selecione uma data</Text>

        {/* ================= CALENDARIO ================= */}

        <View style={styles.calendario}>
          <CalendarList
            horizontal={true}
            minDate={dataInicial}
            markedDates={datasMarcadas}
            pagingEnabled={true}
            calendarWidth={400}
            pastScrollRange={0}
            futureScrollRange={12}
            onDayPress={selecionaDia}
            theme={{
              monthTextColor: tema.cores.textos,
              todayTextColor: tema.cores.primaria,
              textMonthFontSize: 18,
              textDayFontFamily: tema.fontes.texto600,
              textMonthFontFamily: tema.fontes.texto600,
              textDayHeaderFontFamily: tema.fontes.texto600,
            }}
          />
        </View>

        <View style={styles.pessoasContainer}>
          <Ionicons name="people" size={24} color="#3783F5" />
          <Text style={styles.txtPessoas}>Número de pessoas</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputPessoas}
              placeholder="12"
              keyboardType="numeric"
              value={pessoas}
              onChangeText={(texto) => setPessoas(texto)}
            />
          </View>
        </View>

        {/* ================ SLIDER ================ */}

        <View style={styles.slider}>
          <View style={styles.container}>
            <Text style={styles.txtHorario}>Horário</Text>

            <View style={styles.horarioContainer}>
              <View style={styles.horarioIni}>
                <Text style={styles.txtHorarioIni}>{horaInicial}h</Text>
              </View>
              <Text style={styles.txtAte}>Até</Text>
              <View style={styles.horarioFin}>
                <Text style={styles.txtHorarioFin}>{horaFinal}h</Text>
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
        </View>

        <RectButton style={styles.botao} onPress={navegarReservar2}>
          <Text style={styles.txtBotao}>Continuar</Text>
        </RectButton>
      </View>
    </KeyboardAvoidingView>
  );
}
