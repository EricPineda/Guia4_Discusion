import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import colors from '../utils/colors';
export default function Form(props) {
    const { setNombre, setSueldo } = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Ingrese el nombre:"
                    keyboardType="default"
                    style={styles.input}
                    onChange={(e) => setNombre(e.nativeEvent.text)}
                />

            </View>
            <TextInput
                placeholder="Ingrese el sueldo base:"
                keyboardType="decimal-pad"
                style={[styles.input, styles.inputPercentage]}
                onChange={(e) => setSueldo(e.nativeEvent.text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
        margin:20,
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '100%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '100%',
        marginLeft: -5,
    },
});




