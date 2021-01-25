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
});
