import {StyleSheet} from 'react-native';
import {Colors} from '../../config/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  explorer: {
    fontSize: 26,
    color: Colors.red,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  img: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
});
