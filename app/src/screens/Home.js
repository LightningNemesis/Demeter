import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

const {width, height} = Dimensions.get('window');

const percentage = 66;

// const getData = () => {
//   fetch(`http://192.168.0.108:4000/home`, {
//     method: 'GET',
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       console.log(response);
//       return response;
//     });
// };

const Home = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [dataGot, setGotData] = React.useState({});

  React.useEffect(() => {
    fetch(`http://192.168.0.108:4000/home`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setGotData(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View
          style={{
            width: width,
            height: height*1.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `rgba(${dataGot.led_rgba.value_r}, ${dataGot.led_rgba.value_g}, ${dataGot.led_rgba.value_b}, ${dataGot.led_rgba.value_a})`,
          }}>
          <AnimatedCircularProgress
            size={250}
            width={25}
            fill={dataGot.percent_complete.value}
            // fill={10}
            tintColor="#3BFCF9"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#08094C"
          />

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={[styles.indicatorBox, {backgroundColor: '#FFD3BB'}]}>
              <Text style={styles.text_head}>Temp</Text>
              <Text style={styles.text_body}>
                {dataGot.temperature[0].value} °C
              </Text>
            </View>

            <View style={[styles.indicatorBox, {backgroundColor: '#DFEBFE'}]}>
              <Text style={styles.text_head}>Humidity</Text>
              <Text style={styles.text_body}>
                {dataGot.humidity[0].value} %
              </Text>
            </View>
          </View>

          <View style={[styles.indicatorBox, {backgroundColor: '#fff'}]}>
            <Text style={styles.text_head}>Water Level</Text>
            <Text style={styles.text_body}>{dataGot.water_lvl.value} %</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: height * 1.2,
  },
  text_head: {
    color: '#B2A99A',
    fontSize: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  text_body: {
    color: '#000',
    fontSize: 35,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  indicatorBox: {
    margin: 30,
    backgroundColor: '#FEDBA5',
    width: width * 0.35,
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default Home;
