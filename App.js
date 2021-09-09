/**
* @format
* @flow strict-local
*/
import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, statusbar, ScrollView } from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Forms';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import { StatusBar } from 'react-native';


export default function App() {
  const [nombre, setNombre] = useState(null);
  const [sueldo, setSueldo] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (nombre && sueldo) calculate();
    else reset();
  }, [nombre, sueldo]);
  const calculate = () => {
    reset();
    if (!nombre.trim()) {
      setErrorMessage('Añade el nombre ');
    } else if (!sueldo.trim()) {
      setErrorMessage('Añade el sueldo base');
    } else if (sueldo <= 0) {
      setErrorMessage('El sueldo debe ser mayor a 0');
    } else {

      const AFP = sueldo * 0.04;
      const ISSS = sueldo * 0.03;
      const RENTA = sueldo * 0.05;
      const sueldoneto = sueldo - AFP - ISSS - RENTA;

      setTotal({
        AFPFee: AFP.toFixed(2).replace('.', ','),
        ISSSFee: ISSS.toFixed(2).replace('.', ','),
        RENTAFee: RENTA.toFixed(2).replace('.', ','),
        SueldoNeto: sueldoneto.toFixed(2).replace('.', ',')
      });
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };



  return (
    <>
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.Header}>
          <Text style={styles.HeadApp}>Calcular salario neto</Text>
          <Form
            setNombre={setNombre}
            setSueldo={setSueldo}

          />
        </SafeAreaView>
        <Result
          nombre={nombre}
          sueldo={sueldo}

          total={total}
          errorMessage={errorMessage}
        />

        <Footer></Footer>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    margin: 15,
    position: 'relative',
  },
})