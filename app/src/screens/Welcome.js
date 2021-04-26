import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  return (
    <Swiper
      style={styles.wrapper}
      height={height}
      showsButtons={false}
      loop={false}>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/Welcome_images/swipe_2.jpg')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            Fastest way to grow plants at your place
            {/* Demeter */}
          </Text>
          <Text style={styles.text_h2}>
            {/* Fast Delivery to your home, office {`\n`} or wherever you are */}
            Demeter is a fusion between {`\n`}Hydroponics & Led Conductive rendering
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/Welcome_images/swipe_1.jpg')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            {/* Search and choose your {`\n`} favourite foods */}
            Observe and Analyse your {`\n`} plant's growth
          </Text>
          <Text style={styles.text_h2}>
            With all statistics at your finger tips, {`\n`} master the art of urban cultivation
          </Text>
        </View>
      </View>
      <View style={styles.slide}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/Welcome_images/swipe_3.jpg')}
        />
        <View style={styles.text_container}>
          <Text style={styles.text_h1}>
            For the urban urban farming experience
          </Text>
          <TouchableOpacity
            style={styles.login_button}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.login_button_text}>Go to dashboard</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {backgroundColor: '#fff'},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text_container: {
    marginTop: 30,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_h1: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text_h2: {
    paddingTop: 20,
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  image: {
    width,
    flex: 1,
  },
  login_button: {
    width: 220,
    height: 46,
    backgroundColor: '#008C06',
    borderRadius: 10,
    marginTop: 20,
    elevation: 10,
  },
  login_button_text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
