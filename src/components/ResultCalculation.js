import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Image} from "react-native";


export default function ResultCalculation(props) {
  const {capital, interest, months, total, errorMessage, calculationHandler, userName} = props;

  useEffect(() => {
    calculationHandler();
  }, [capital, interest, months]);
 return (
    <View style={styles.content}>
      
      {total && (
        <View style={styles.boxResult}>
          <Image style= { styles.backgroundImage } source="https://i.pinimg.com/564x/3d/93/7d/3d937d8cc2a765ddaaa7d066049d9df5.jpg"/>
          <Text style={styles.title}>Detalle Prestamo para {userName}</Text>
          <DataResult title="Cantidad solicitada: $" value={`${capital} `} />
          <DataResult title="Interes %:" value={`${interest} %`} />
          <DataResult title="Plazos:" value={`${months} meses`} />
          <DataResult title="Pago mensual: $" value={`${total.monthlyFee.toFixed(2)} `} />
          <DataResult title="Total a pagar:" value={`${total.totalPayable.toFixed(2)} `} />
        </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
function DataResult(props) {
  const {title, value} = props;

  return (
    <View style={styles.value}>
      <Text style={{color : 'white'}}>{title}</Text>
      <Text style={{color : 'white'}}>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.3
},
});