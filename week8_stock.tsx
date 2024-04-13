import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const buttonContent = ["VIN GROUP", "FLC", 'VIETJET', 'MASSAN', 'VINAMILK', 'SRC', 'HSBC', 'SAM HOLDING', 'PETROLIMEX']

function App(): React.JSX.Element {
  return(
    <View>
      <View style={[styles.container, {backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}]}>
        <View>
          <Text style={styles.textStyle}>VIN GROUP</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>VIN</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>8.7000(-1.5837%)</Text>
        </View>
      </View>
      <View style={[styles.container, {backgroundColor: 'pink', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}]}>
        {buttonContent.map((content) => <View style={styles.box}>
          <Text style={{fontSize: 13}}>{content}</Text>
        </View>)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    padding: '3%'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '26%',
    height: 50,
    margin: 10,
    backgroundColor: 'lightgray',
    marginTop: '3%',
    borderWidth: 1,
  }
});

export default App;
