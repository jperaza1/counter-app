import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  const handleClickPlus = (): void => {
    setContador(contador + 1);
  };

  const handleClickLess = (): void => {
    setContador(contador - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador {contador}</Text>
      <Fab title="+1" onPres={handleClickPlus} position="br" />
      <Fab title="-1" onPres={handleClickLess} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
});
