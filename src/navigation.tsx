import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// import Loading from './screens/Loading';
import TimeLine from './screens/TimeLine';
import Explorer from './screens/Explorer';
import Plus from './screens/Plus';
import Subscriptions from './screens/Subscriptions';
import Library from './screens/Library';

const icons = {
  TimeLine: {
    lib: Foundation,
    name: 'home',
  },
  Explorer: {
    lib: MaterialCommunityIcons,
    name: 'compass-outline',
  },
  Plus: {
    lib: AntDesign,
    name: 'pluscircleo',
  },
  Subscriptions: {
    lib: MaterialIcons,
    name: 'subscriptions',
  },
  Library: {
    lib: MaterialIcons,
    name: 'video-library',
  },
};

import {styles} from './styles';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}: any) => ({
          tabBarIcon: ({color}) => {
            const {lib: Icon, name} = icons[route.name];
            return <Icon name={name} size={25} color={color} />;
          },
        })}
        initialRouteName="TimeLine"
        activeColor="#fff"
        inactiveColor="#92929c"
        barStyle={styles.tabBar}>
        <Tab.Screen
          name="TimeLine"
          component={TimeLine}
          options={{title: 'Inicio'}}
        />
        <Tab.Screen
          name="Explorer"
          component={Explorer}
          options={{title: 'Explorar'}}
        />
        <Tab.Screen name="Plus" component={Plus} options={{title: ''}} />
        <Tab.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={{title: 'Inscrições'}}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{title: 'Biblioteca'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
