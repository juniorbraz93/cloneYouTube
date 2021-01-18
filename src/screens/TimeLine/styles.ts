import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#545454',
  },
  Header: {
    backgroundColor: '#343434',
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
    color: '#c4302b',
    left: 5,
  },
  TextLogo: {
    left: 11,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#fff',
  },
  HeaderIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Icon: {
    color: '#fff',
    padding: 10,
  },
  Img: {
    height: 30,
    width: 30,
    borderRadius: 15,
    right: 3,
  },

  CanalPerfiel: {
    marginTop: 5,
    marginBottom: 5,
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});
