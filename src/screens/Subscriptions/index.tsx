import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

import {construction} from '../../config/image';

const Subscriptions: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.explorer}>Explorer</Text>
      <Image source={construction} style={styles.img} />
    </View>
  );
}

export default Subscriptions;
