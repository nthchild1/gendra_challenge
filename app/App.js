import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigation from './routes/AppNavigator';
import {Provider} from 'react-redux';
import store from './store/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <DrawerNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
