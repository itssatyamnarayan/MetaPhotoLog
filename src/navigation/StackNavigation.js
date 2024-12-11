import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {memo} from 'react';
import {View} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import ProjectDetail from '../screens/ProjectDetail';
import Map from '../screens/Map';
import CreateProject from '../screens/CreateProject';
import EditProject from '../screens/EditProject';

import MaterialMenu from '../components/MaterialMenu';
import CapturePhoto from '../screens/CapturePhoto';
import EditPhoto from '../screens/EditPhoto';
import CreatePhotoLog from '../screens/CreatePhotoLog';
import AddPhotos from '../screens/AddPhotos';
import EditPhotoLog from '../screens/EditPhotoLog';

import MaterialTopTabNavigation from './MaterialTopTabNavigation';
import EditProfile from '../screens/EditProfile';
import Subscription from '../screens/Subscription';

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
        statusBarStyle: 'light',
      }}>
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

          headerRight: () => (
            <View style={{overflow: 'visible'}}>
              <MaterialMenu isHeaderRight={true} />
            </View>
          ),
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

      <Stack.Screen
        name="CapturePhoto"
        component={CapturePhoto}
        options={{
          title: 'Capture Photo',
        }}
      />

      <Stack.Screen
        name="EditPhoto"
        component={EditPhoto}
        options={{
          title: 'Edit Photo',
        }}
      />

      <Stack.Screen
        name="CreatePhotoLog"
        component={CreatePhotoLog}
        options={{
          title: 'Create PhotoLog',
        }}
      />

      <Stack.Screen
        name="AddPhotos"
        component={AddPhotos}
        options={{
          title: 'Add Photos',
        }}
      />

      <Stack.Screen
        name="EditPhotoLog"
        component={EditPhotoLog}
        options={{
          title: 'Edit PhotoLog',
        }}
      />

      <Stack.Screen
        name="MaterialTopTabNavigation"
        component={MaterialTopTabNavigation}
        options={{title: 'Templates'}}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />

      <Stack.Screen
        name="Subscription"
        component={Subscription}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default memo(StackNavigation);
