import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

import {Profile, Canal1, LayerVideoCh01} from '../../config/image';

const TimeLine: React.FC = () => {
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
      <ScrollView>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Image source={LayerVideoCh01} />
            <Image source={Canal1} style={styles.CanalPerfiel} />
          </View>
          <View>
            <Image source={LayerVideoCh01} />
            <Image source={Canal1} style={styles.CanalPerfiel} />
          </View>
          <View>
            <Image source={LayerVideoCh01} />
            <Image source={Canal1} style={styles.CanalPerfiel} />
          </View>
        </ScrollView>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
        <View>
          <Image source={LayerVideoCh01} />
          <Image source={Canal1} style={styles.CanalPerfiel} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TimeLine;

// <Image source={Canal2} style={styles.CanalPerfiel} />
// <Image source={Canal3} style={styles.CanalPerfiel} />
// <Image source={Canal4} style={styles.CanalPerfiel} />
// <Image source={Canal5} style={styles.CanalPerfiel} />
// <Image source={Canal6} style={styles.CanalPerfiel} />

// Canal2,
// Canal3,
// Canal4,
// Canal5,
// Canal6,
