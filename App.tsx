import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Navigator} from './src/navigator/Navigator';
import {PerssionsProvider} from './src/context/PermissionsContext';

const AppState = ({children}: any) => {
  return <PerssionsProvider>{children}</PerssionsProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};
export default App;
