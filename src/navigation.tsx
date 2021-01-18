import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import Loading from './screens/Loading';
import TimeLine from './screens/TimeLine';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TimeLine"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="TimeLine" component={TimeLine} />
      </Stack.Navigator>
      {/* <Tab.Navigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;
