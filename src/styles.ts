import {StyleSheet} from 'react-native';
import {Colors} from './config/colors';

export const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 1.5,
    backgroundColor: Colors.grayDark,
    borderTopColor: Colors.grayLight,
    height: 50,
  },
  active: {
    color: Colors.white,
  },
});
