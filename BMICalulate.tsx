import {useState} from 'react';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Switch,
  TextInput,
  ImageBackground,
  Button,
  Pressable,
  Alert
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
    
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [BMI, setBMI] = useState(0);
    
    const checkValidInput = (weight : number, height : number) => {
        if(true) {
            Alert.alert("Input cannot be negative");
        }
    }
    const calculateBMI = (weight: number, height: number) => {
        checkValidInput(weight, height);
        return (weight/height**2).toFixed(2);
      }
  return (
    
    <View style={styles.centerContainer}>
      <View style={{marginBottom: 20}}>
        <Text style={{marginLeft: 20}}>Weight (KG)</Text>
        <TextInput onChangeText={(value) => {
            setWeight(Number(value));
        }} placeholder='0' style={styles.input}></TextInput>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{marginLeft: 20}}>Height (M)</Text>
        <TextInput onChangeText={(value) => {
            setHeight(Number(value));
        }} placeholder='0' style={styles.input}></TextInput>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text>BMI: {BMI}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Pressable onPress={() => {
            setBMI(Number(calculateBMI(weight, height)));
        }} style={styles.button}>
          <Text style={styles.text}>Compute</Text>
        </Pressable>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  input:  {
    marginTop: 5,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  centerContainer: {
    flex:1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


export default App;
