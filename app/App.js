import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigation from './routes/AppNavigator';
import {Provider} from 'react-redux';
import store from './store/store';
import theme from '../src/theme';
import {ThemeProvider} from 'styled-components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <DrawerNavigation />
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
