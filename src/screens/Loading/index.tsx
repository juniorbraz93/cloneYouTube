import React from 'react';
import {SafeAreaView, Image, View, StatusBar} from 'react-native';

import {Logo} from '../../config/image';

import {styles} from './styles';

const Loading: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.img} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Loading;
