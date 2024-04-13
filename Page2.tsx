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
  Modal,
  Pressable
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
  const [modalVisible, setModalVisible] = useState(true);

  return (

    <View>
      <ImageBackground style={[styles.courseImage]} source={require('./assets/img/course4.jpg')}>
      <View style={styles.portion}>
        <Text style={{paddingTop: 10}}>
          <Icon name="chevron-left" size={25} color="#000" />
        </Text>
        <Text style={{paddingTop: 10}}>
          <Icon name="ellipsis-v" size={25} color="#000" />
        </Text>
      </View>
      <View style={{backgroundColor: 'yellow', width: '30%', alignContent: 'center', marginTop: 10, marginLeft: 10, borderRadius: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', padding: 10, color: '#000'}}>BESTSELLER</Text>
      </View>
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold', padding: 10, paddingTop: 10, color: '#000'}}>Design Thinking</Text>
      </View>
      <View style={{flexDirection: 'row', paddingLeft: 10,}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingTop: 10}}>
            <Icon name="users" size={25} color="#000" />
          </Text>
          <Text style={{paddingTop: 12, paddingLeft: 5, paddingRight: 10, fontWeight: '500'}}>55k</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{paddingTop: 10}}>
            <Icon name="star" size={25} color="#000" />
          </Text>
          <Text style={{paddingTop: 12, paddingLeft: 5, paddingRight: 10, fontWeight: '500'}}>4.1k</Text>
        </View>
      </View>
      <View>
        <Text style={{padding: 10, fontSize: 30, fontWeight: '900', color: "#000"}}>$50</Text>
      </View>
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize:20, fontWeight: 'bold', color: '#000'}}>Course Content</Text>
            
            <View style={{flex: 1,justifyContent: 'space-around'}}>
              <View style={styles.courseContent}>
                <Text style={{fontSize: 45, color: 'lightgray'}}>
                  01
                </Text>
                <View style={{marginLeft: -30, justifyContent: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>5:35 mins</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>Welcome to the course</Text>
                </View>
                <Text style={{paddingTop: 8}}>
                  <Icon name="play-circle" size={50} color="lightgreen" />
                </Text>
              </View>
              <View style={styles.courseContent}>
                <Text style={{fontSize: 45, color: 'lightgray'}}>
                  02
                </Text>
                <View style={{marginLeft: -30, justifyContent: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>7:35 mins</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>Design Thinking - Intro</Text>
                </View>
                <Text style={{paddingTop: 8}}>
                  <Icon name="play-circle" size={50} color="lightgreen" />
                </Text>
              </View>
              <View style={styles.courseContent}>
                <Text style={{fontSize: 45, color: 'lightgray'}}>
                  03
                </Text>
                <View style={{marginLeft: -30, justifyContent: 'center'}}>
                  <Text style={{fontWeight: 'bold', fontSize: 15}}>10:35 mins</Text>
                  <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>Design Thinking Process</Text>
                </View>
                <Text style={{paddingTop: 8}}>
                  <Icon name="play-circle" size={50} color="lightgreen" />
                </Text>
              </View>
              
              <View style={{flexDirection: 'row', marginRight: 5, columnGap: 15}}>
                <View style={{backgroundColor: 'pink', flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 25}}>
                  <Text style={{}}>
                    <Icon name="briefcase" size={25} color="red" />
                  </Text> 
                </View>
                <Pressable
                style={[styles.button, {flex: 4}]}
                >
                <Text style={styles.textStyle}>Buy Now</Text>
                </Pressable>
              </View>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
      </ImageBackground>
    </View>


  );
}

const styles = StyleSheet.create({
  portion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  courseImage: {
    width: '100%',
    height: '100%',
  },
  textInBadge: {
    padding: 10,
  },  
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 22,

  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    height: '45%',
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    padding: 20,
    elevation: 2,
    backgroundColor: 'purple',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
  },
  courseContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});


export default App;
