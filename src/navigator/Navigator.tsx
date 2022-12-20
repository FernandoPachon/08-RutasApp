import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../screens/MapScreen';
import PermisionsScreen from '../screens/PermisionsScreen';

const Stack = createStackNavigator();

export const Navigator=()=> {
  return (
    <Stack.Navigator
        initialRouteName='PermisionsScreen'
        screenOptions={{
            headerShown: false,
        }}
    >
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermisionsScreen" component={PermisionsScreen} />
    </Stack.Navigator>
  );
}