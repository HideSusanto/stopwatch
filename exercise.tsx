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
        <View style = {[styles.box, {backgroundColor: 'green'}]}>
            <Text>1</Text>
        </View>
        <View style = {[styles.box1, {backgroundColor: 'yellow'}]}>
            <Text>2</Text>
        </View>
        <View style = {[styles.box2, {backgroundColor: 'red'}]}>
            <Text>3</Text>
        </View>
        <View style = {[styles.box3, {backgroundColor: 'blue'}]}>
            <Text>3</Text>
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
       width: 70,
       height: 50,
    },
   box2: {
       width: 50,
       height: 70,
    },
   box3: {
       width: 60,
       height: 60,
    },
  container: {
    backgroundColor: 'gray',
    flexDirection: 'column',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10
  },
});


export default App;
