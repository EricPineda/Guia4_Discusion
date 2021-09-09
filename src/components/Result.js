import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { nombre, sueldo, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESULTADOS</Text>
                    <DataResult title="Nombre: " value={`${nombre} `} />
                    <DataResult title="Sueldo base: " value={`$ ${sueldo} `} />
                    <DataResult title="AFP (4%): " value={`$ ${total.AFPFee} `} />
                    <DataResult title="ISSS (3%): " value={`$ ${total.ISSSFee} `} />
                    <DataResult title="RENTA (5%): " value={`$ ${total.RENTAFee} `} />
                    <Text style={styles.linea}></Text>
                    <DataResult title="Sueldo neto: " value={`$ ${total.SueldoNeto} `} />


                </View>
            )}
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { title, value } = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
       height:500,
      overflow: 'scroll',
    },
    boxResult: {
        padding: 30,
        overflow: 'scroll',
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
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
    linea:{
        borderBottomWidth: 2,
        borderBottomColor:'#f00',
    },
});