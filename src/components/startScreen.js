import React, {useState, } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextAreaView,
  StatusBar,
  LogBox,
  SafeAreaView,
} from 'react-native';
import Form from './Form';
import ResultCalculation from './ResultCalculation';
import { ImageBackground } from "react-native";

import firebase from '../utils/firebase';
import Auth from './Auth';
import 'firebase/auth'


export default function StartScreen(props) {
  const { userName } = props;

  const [capital, setCapital] = useState(null);
  const [interes, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const image = { uri: "https://i.linio.com/p/06f55f6fcfe0c69238ed0a6c3e2c0029-product.jpg" };

  const calculate = () => {
    if (!capital) {
      setErrorMessage('No has ingresado ninguna cantidad');
    } else if (!interes) {
      setErrorMessage('Añade los intereses');
    } else if (!months) {
      setErrorMessage('Añade los meses');
    } else {
      // Convrtir interés a porcentaje
      const i = interes / 100;

      // Obtener el total ya aplicado el interés
      var _total = {};
      _total.totalPayable = capital * (1 + i);
      _total.monthlyFee = _total.totalPayable / months;
      setErrorMessage('');
      setTotal(_total);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>    
      <ImageBackground source={image} style={styles.backgroundImage}> 
        <Text style={styles.titleApp}>Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
        </ImageBackground>
      </SafeAreaView>
      <ResultCalculation
        capital={capital}
        interest={interes}
        months={months}
        total={total}
        errorMessage={errorMessage}
        calculationHandler={calculate}
        userName = {userName}
      />  
    </> 
  );  
}



const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.9
},
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
});

