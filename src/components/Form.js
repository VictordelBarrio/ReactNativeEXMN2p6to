import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const {setCapital, setInterest, setMonths} = props;

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setCapital(e.nativeEvent.text)}
        />
      
      </View>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setMonths(value)}
        placeholder={{
          label: 'Seleccione plazos...',
          value: null,
        }}
        items={[
          {label: '3 meses', value: 3},
          {label: '6 meses', value: 6},
          {label: '12 meses', value: 12},
          {label: '24 meses', value: 24},
        ]}
      />
     
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => setInterest(value)}
        placeholder={{
          label: 'Seleccione interes',
          value: null,
        }}
        items={[
          {label: '2%', value: 0.02},
          {label: '4%', value: 0.04},
          {label: '6%', value: 0.06},
         
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 10,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
    color: "#FF00FF00"
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF00FF00',
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
    color: '#000',
    borderColor: '#ff00ff00',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 32,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30,
    backgroundColor: "#FF00FF00",
    
  },
});