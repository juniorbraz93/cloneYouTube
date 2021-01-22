import {StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.grayDark,
  },
  Header: {
    backgroundColor: Colors.grayDarkHeader,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Logo: {
    color: Colors.red,
    left: 5,
  },
  TextLogo: {
    left: 11,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: Colors.white,
  },
  HeaderIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Icon: {
    color: Colors.white,
    padding: 10,
  },
  Img: {
    height: 30,
    width: 30,
    borderRadius: 15,
    right: 3,
  },
  TimeLine: {},
  Layer: {
    marginTop: 7,
    width: 390,
    height: 220,
  },
  HeaderTimeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CanalPerfiel: {
    margin: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  ComunityQuestion: {},
  HeaderComunity: {
    flexDirection: 'row',
  },
  NameCh: {
    margin: 2,
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Time: {
    margin: 2,
    color: Colors.white,
  },
  ContainerTextComunity: {
    margin: 10,
  },
  TitleTextComunity: {
    color: Colors.white,
    fontSize: 14,
  },
  ImageComunity: {
    marginTop: 7,
    width: 300,
    height: 220,
  },
  ShortVideos: {},
  ShortContainer: {
    flexDirection: 'row',
  },
  shortText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  Short: {
    width: 150,
    height: 300,
    padding: 14,
    marginRight: 16,
  },
  ShortTitle: {
    marginTop: 200,
    color: Colors.red,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  shortSubTitle: {
    color: Colors.red,
    fontFamily: 'Roboto',
  },
  TabGraySmall: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 6,
  },
  TabGrayLarge: {
    marginTop: 10,
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 15,
  },
});
