/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {useState} from 'react';
import React from 'react';
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
  Switch
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


  return (

    <View style = {styles.container}>
        <View style = {[styles.box, {backgroundColor: 'rgb(0, 222, 108)'}]}>
            <Text style = {styles.text}>1</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'rgb(238, 196, 41)'}]}>
            <Text style = {styles.text}>2</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightred'}]}>
            <Text style = {styles.text}>3</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>
        <View style = {[styles.box, {backgroundColor: 'lightblue'}]}>
            <Text style = {styles.text}>4</Text>
        </View>

    </View>


  );
}

const styles = StyleSheet.create({
   box: {
       width: 50,
       height: 50,
   },
   box1: {
       width: 60,
       height: 40,
   },
   box2: {
       width: 50,
       height: 70,
   },
   box3: {
       width: 70,
       height: 60,
   },
   text: {
        color: 'white',
        textAlign: 'center',
   },
  container: {
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
  },
});


export default App;
