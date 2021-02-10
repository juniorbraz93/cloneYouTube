import React from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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
      <View style={styles.Category}>
        <View style={styles.CategoryColumn}>
          <View style={styles.LabelBooming}>
            <MaterialIcons
              name="local-fire-department"
              size={25}
              style={styles.Icon}
            />
            <Text style={styles.TextLabel}>Em Alta</Text>
          </View>
          <View style={styles.LabelGames}>
            <Ionicons name="game-controller" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Jogos</Text>
          </View>
          <View style={styles.LabelMoves}>
            <MaterialIcons name="local-movies" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Filmes</Text>
          </View>
          <View style={styles.LabelLive}>
            <Fontisto name="livestream" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Ao vivo</Text>
          </View>
        </View>
        <View style={styles.CategoryColumn}>
          <View style={styles.LabelMusic}>
            <Feather name="music" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Música</Text>
          </View>
          <View style={styles.LabelNews}>
            <Ionicons name="newspaper" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Notícias</Text>
          </View>
          <View style={styles.LabelLearn}>
            <FontAwesome name="book" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Aprender</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Explorer;
