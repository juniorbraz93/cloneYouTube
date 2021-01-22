import {StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    width: 335,
  },
  SubText: {
    color: Colors.white,
  },
  Icon: {
    color: Colors.white,
    padding: 10,
  },
});
