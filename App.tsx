import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';


// barStyle="dark-content"
const App: React.FC = () => {
  return (
    <>
      <StatusBar />
      <Navigation />
    </>
  );
};

export default App;
