import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

import {Profile, Mini01, Mini02, Mini03, Canal3} from '../../config/image';
import {TitleSubTiltle} from '../../config/title';

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
          <View style={styles.LabelSports}>
            <Entypo name="trophy" size={25} style={styles.Icon} />
            <Text style={styles.TextLabel}>Esportes</Text>
          </View>
        </View>
      </View>
      <View style={styles.TabGraySmall} />
      <View style={styles.FBreederContainer}>
        <View style={styles.FeaturedBreeder}>
          <View>
            <Image source={Canal3} style={styles.CanalPerfiel} />
          </View>
          <View>
            <Text style={styles.NameCh}>Curso em Vídeo</Text>
            <View style={styles.BorderColor}>
              <Text style={styles.TextFBreeder}>Criador em Destaque</Text>
            </View>
          </View>
        </View>

        <View style={styles.ScrollView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.MiniLabel}>
              <Image source={Mini01} style={styles.Layer} />
              <Text style={styles.TextFBreeder}>
                🤩 Quando sai o Módulo 2 do Curso de HTML5? ✌️
              </Text>
              <Text style={styles.TextFBreeder}>
                15 mil visualizações há 4 semanaS
              </Text>
            </View>
            <View style={styles.MiniLabel}>
              <Image source={Mini02} style={styles.Layer} />
              <Text style={styles.TextFBreeder}>
                Curso Python #01 - Seja um Programador
              </Text>
              <Text style={styles.TextFBreeder}>
                3,3 mi visualizações há 3 anos
              </Text>
            </View>
            <View style={styles.MiniLabel}>
              <Image source={Mini03} style={styles.Layer} />
              <Text style={styles.TextFBreeder}>
                Introdução a Algoritmos - Curso de Algoritmos #01 - Gustavo
                Guanabara
              </Text>
              <Text style={styles.TextFBreeder}>
                2,5 mi visualizações há 6 anos
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.TabGraySmall} />
      <View>
        <Text style={styles.shortText}>Vídeos em alta</Text>
      </View>
    </View>
  );
};

export default Explorer;
