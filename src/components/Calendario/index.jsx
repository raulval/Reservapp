import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { useState } from "react/cjs/react.development";
import { tema } from "../../global/styles/tema";

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

export function Calendario() {
  const navigation = useNavigation();
  const [selecionado, setSelecionado] = useState(dataInicial);
  const datasMarcadas = {
    [selecionado]: {
      selected: true,
      selectedColor: tema.cores.textos,
    },
  };
  const selecionaDia = (dia) => {
    setSelecionado(dia.dateString);
    const dataSelecionada = moment(dia.dateString).format("DD/MM/YYYY");
    navigation.setParams("Reservar", {
      dataSelecionada: dataSelecionada,
    });
  };

  return (
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
  );
}
