import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './styles';

import {
  Profile,
  Canal1,
  Canal2,
  Canal3,
  Canal4,
  Canal5,
  Canal6,
  Layer1,
  Layer3,
  Layer6,
  Layer11,
  Layer13,
  Layer15,
  short1,
  short2,
  short3,
  short4,
  short5,
  short6,
  short7,
  short8,
  comunity1,
} from '../../config/image';
import {TitleSubTiltle} from '../../config/title';
import Layer from '../../components/Layer';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={Layer1} style={styles.Layer} />
        <View style={styles.HeaderTimeLine}>
          <Image source={Canal1} style={styles.CanalPerfiel} />
          <Layer
            text={TitleSubTiltle.title1}
            subtext={TitleSubTiltle.subtitle1}
            icon
          />
        </View>

        <View style={styles.TabGraySmall} />

        <View style={styles.ComunityQuestion}>
          <View style={styles.HeaderComunity}>
            <Image source={Canal3} style={styles.CanalPerfiel} />
            <View>
              <View>
                <Text style={styles.NameCh}>Curso em Vídeo</Text>
              </View>
              <Text style={styles.Time}>há 2 semanas</Text>

              <View style={styles.ContainerTextComunity}>
                <Text style={styles.TitleTextComunity}>
                  Entendedores entenderão 🖖😉
                </Text>
              </View>
              <Image source={comunity1} style={styles.ImageComunity} />
            </View>
          </View>
        </View>

        <View style={styles.TabGraySmall} />

        <View style={styles.ShortVideos}>
          <View style={styles.ShortContainer}>
            <Text style={styles.shortText}>Vídeos curtos</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <ImageBackground source={short1} style={styles.Short}>
                <Text style={styles.ShortTitle}>
                  Uma hora dessa em 2001 eu estava assim
                </Text>
                <Text style={styles.shortSubTitle}>1,7 mil de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short2} style={styles.Short}>
                <Text style={styles.ShortTitle}>
                  Nunca compre computador onde vende geladeiras
                </Text>
                <Text style={styles.shortSubTitle}>2,5 mil de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short3} style={styles.Short}>
                <Text style={styles.ShortTitle}>
                  Aquele arquivo suspeito kkkk
                </Text>
                <Text style={styles.shortSubTitle}>356 mil de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short4} style={styles.Short}>
                <Text style={styles.ShortTitle}>
                  Eu não vou hackear o face da morena cara, desista
                </Text>
                <Text style={styles.shortSubTitle}>1,6 mi de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short5} style={styles.Short}>
                <Text style={styles.ShortTitle}>Tá, mais cadê o RGB? kkkk</Text>
                <Text style={styles.shortSubTitle}>200 mil de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short6} style={styles.Short}>
                <Text style={styles.ShortTitle}>
                  Eles bugam o imbugavel kkkk
                </Text>
                <Text style={styles.shortSubTitle}>600 mil de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short7} style={styles.Short}>
                <Text style={styles.ShortTitle}>...</Text>
                <Text style={styles.shortSubTitle}>243 mil de visua...</Text>
              </ImageBackground>
            </View>
            <View>
              <ImageBackground source={short8} style={styles.Short}>
                <Text style={styles.ShortTitle}>
                  O MJÖLNIR está meio diferente hoje
                </Text>
                <Text style={styles.shortSubTitle}>3 mi de visua...</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>

        <View style={styles.TabGraySmall} />

        <Image source={Layer6} style={styles.Layer} />
        <View style={styles.HeaderTimeLine}>
          <Image source={Canal3} style={styles.CanalPerfiel} />
          <Layer
            text={TitleSubTiltle.title2}
            subtext={TitleSubTiltle.subtitle2}
            icon
          />
        </View>

        <View style={styles.TabGraySmall} />

        <Image source={Layer3} style={styles.Layer} />
        <View style={styles.HeaderTimeLine}>
          <Image source={Canal2} style={styles.CanalPerfiel} />
          <Layer
            text={TitleSubTiltle.title3}
            subtext={TitleSubTiltle.subtitle3}
            icon
          />
        </View>

        <View style={styles.TabGraySmall} />

        <Image source={Layer11} style={styles.Layer} />
        <View style={styles.HeaderTimeLine}>
          <Image source={Canal4} style={styles.CanalPerfiel} />
          <Layer
            text={TitleSubTiltle.title4}
            subtext={TitleSubTiltle.subtitle4}
            icon
          />
        </View>

        <View style={styles.TabGraySmall} />

        <Image source={Layer13} style={styles.Layer} />
        <View style={styles.HeaderTimeLine}>
          <Image source={Canal5} style={styles.CanalPerfiel} />
          <Layer
            text={TitleSubTiltle.title5}
            subtext={TitleSubTiltle.subtitle5}
            icon
          />
        </View>

        <View style={styles.TabGraySmall} />

        <Image source={Layer15} style={styles.Layer} />
        <View style={styles.HeaderTimeLine}>
          <Image source={Canal6} style={styles.CanalPerfiel} />
          <Layer
            text={TitleSubTiltle.title5}
            subtext={TitleSubTiltle.subtitle5}
            icon
          />
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
// Canal1, LayerVideoCh01
