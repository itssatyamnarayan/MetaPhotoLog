import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ProfileSetup from '../screens/ProfileSetup';
import {memo} from 'react';

const Stack = createNativeStackNavigator();

const IsLoginNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 24,
        },
        headerStyle: {
          backgroundColor: '#006D77',
          height: Platform.OS === 'android' ? 100 : 115,
        },
        statusBarStyle: 'dark',
      }}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default memo(IsLoginNavigation);
