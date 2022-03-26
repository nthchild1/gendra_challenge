import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigation from './routes/AppNavigator';
import {Alert} from 'react-native';

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <DrawerNavigation />
    </SafeAreaProvider>
  );
};

export default App;
