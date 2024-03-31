import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import MySwiper from './components/Swiper';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MySwiper />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingBottom: 100,
  },
});

export default MainScreen;
