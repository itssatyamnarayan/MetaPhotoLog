import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {memo} from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ProfileSetup from '../screens/ProfileSetup';
import BottomTabNavigation from './BottomTabNavigation';
import ProjectDetail from '../screens/ProjectDetail';
import Map from '../screens/Map';
import CreateProject from '../screens/CreateProject';
import EditProject from '../screens/EditProject';

import MaterialMenu from '../components/MaterialMenu';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
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
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetail"
        component={ProjectDetail}
        options={{
          title: 'Project Detail',

          headerRight: () => <MaterialMenu isHeaderRight={true} />,
        }}
      />

      <Stack.Screen
        name="ProjectMap"
        component={Map}
        options={{
          title: 'Project Map',
        }}
      />

      <Stack.Screen
        name="CreateProject"
        component={CreateProject}
        options={{
          title: 'Create Project',
        }}
      />

      <Stack.Screen
        name="EditProject"
        component={EditProject}
        options={{
          title: 'Edit Project',
        }}
      />
    </Stack.Navigator>
  );
};

export default memo(StackNavigation);
