import React from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

import {Profile} from '../../config/image';

const Explorer: React.FC = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={styles.HeaderLogo}>
          <AntDesign name="youtube" style={styles.Logo} size={35} />
          <Text style={styles.TextLogo}>YouTube</Text>
        </View>
        <View style={styles.HeaderIcons}>
          <FontAwesome5Pro name="chromecast" size={25} style={styles.Icon} />
          <MaterialCommunityIcons
            name="bell-outline"
            size={25}
            style={styles.Icon}
          />
          <AntDesign name="search1" size={25} style={styles.Icon} />

          <Image source={Profile} style={styles.Img} />
        </View>
      </View>
    </View>
  );
};

export default Explorer;
