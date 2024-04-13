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
  ImageBackground
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

    <ScrollView>
      <View style={styles.portion}>
        <Text style={{paddingTop: 10}}>
          <Icon name="navicon" size={20} color="#000" />
        </Text>
        <View>
          <Image source={require('./assets/img/avatar.png')} style={{width: 50, height: 50, borderRadius: 50}}/>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000', padding: 10}}>Hey Alex,</Text>
      </View>
      <View>
        <Text style={{padding: 10, paddingTop: 5, fontSize: 21}}>Find a course you want to learn</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 10,marginLeft: 10, marginRight:10, marginTop: 20, backgroundColor: '#E1E1E1', borderRadius: 100}}>
        <View style={{alignItems: 'center'}}>
        <Icon name="search" size={30} color="gray" style={{padding: 8, marginLeft: 10}} />
        </View>
        <TextInput placeholder='Search for anything' style={{paddingLeft: 20}}></TextInput>
      </View>
      <View style={{padding: 10, paddingTop:25, paddingBottom: 25, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Categories</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#7184EE'}}>See All</Text>
      </View>
      <View style= {{flexWrap: 'wrap', flexDirection: 'row', flex: 1}}>
        <View style={{borderRadius: 50}}>
          <ImageBackground style={[styles.courseImage]} imageStyle={{ borderRadius: 14}} source={require('./assets/img/course1.jpg')} resizeMode="cover">
            <View style={styles.textInBadge}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>UX Design</Text>
              <Text style={{color: '#000'}} >25 Courses</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground style={[styles.courseImage]} imageStyle={{ borderRadius: 14}} source={require('./assets/img/course2.jpg')} resizeMode="cover">
            <View style={styles.textInBadge}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Marketing</Text>
              <Text style={{color: '#000'}}>20 Courses</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground style={[styles.courseImage]} imageStyle={{ borderRadius: 14}} source={require('./assets/img/course3.jpg')} resizeMode="cover">
            <View style={styles.textInBadge}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Photography</Text>
              <Text style={{color: '#000'}}>10 Courses</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <ImageBackground style={[styles.courseImage]} imageStyle={{ borderRadius: 14}} source={require('./assets/img/course4.jpg')} resizeMode="cover">
            <View style={styles.textInBadge}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Business Photography</Text>
              <Text style={{color: '#000'}}>7 Courses</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  portion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  courseImage: {
    width: 176,
    height: 250,
    margin: 10,
  },
  textInBadge: {
    padding: 10,
  }
});


export default App;
