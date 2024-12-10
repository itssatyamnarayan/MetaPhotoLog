import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {memo} from 'react';
import Projects from '../screens/Projects';
import {Image, StyleSheet, View, Text, Pressable, Platform} from 'react-native';
import ICONS from '../../constants/icons';
import HeaderButtons from '../components/HeaderButtons';
import Photos from '../screens/Photos';
import PhotoLogs from '../screens/PhotoLogs';
import MainMenu from '../screens/MainMenu';

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}) => {
  function newProject() {
    navigation.navigate('CreateProject');
  }

  const addPhoto = () => {
    navigation.navigate('CapturePhoto');
  };

  const createPhotoLog = () => {
    navigation.navigate('CreatePhotoLog');
  };

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#006D77',
          height: Platform.OS === 'android' ? 90 : 105,
        },
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 24,
        },
        tabBarStyle: {
          backgroundColor: '#006D77',
          height: Platform.OS === 'android' ? 70 : 90,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: ' rgba(255, 255, 255, 0.5)',
        tabBarShowLabel: false,
      }}>
      <BottomTabs.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={ICONS.taskBt11}
                style={{
                  width: 60,
                  height: 36,
                  tintColor: color,
                }}
              />
            ) : (
              <Image
                source={ICONS.taskBt1}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),

          headerRight: () => (
            <HeaderButtons
              btn="+ New project"
              isHeader={true}
              onClick={newProject}
            />
          ),
        }}
      />

      <BottomTabs.Screen
        name="Photos"
        component={Photos}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={ICONS.circleBt21}
                style={{
                  width: 60,
                  height: 36,
                  tintColor: color,
                }}
              />
            ) : (
              <Image
                source={ICONS.circleBt2}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          headerRight: () => (
            <HeaderButtons
              btn="+ Add Photo"
              isHeader={true}
              onClick={addPhoto}
            />
          ),
        }}
      />

      <BottomTabs.Screen
        name="PhotoLogs"
        component={PhotoLogs}
        options={{
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <Image
                source={ICONS.groupBt31}
                style={{
                  width: 60,
                  height: 36,
                  tintColor: color,
                }}
              />
            ) : (
              <Image
                source={ICONS.groupBt3}
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          headerRight: () => (
            <HeaderButtons
              btn="+ New"
              isHeader={true}
              onClick={createPhotoLog}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="MainMenu"
        component={MainMenu}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Image
                source={ICONS.threelineBt41}
                style={{
                  width: 60,
                  height: 36,
                  tintColor: color,
                }}
              />
            ) : (
              <Image
                source={ICONS.threelineBt4}
                style={{
                  width: 20,
                  height: 14,
                }}
              />
            ),
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default memo(BottomTabNavigation);

const styles = StyleSheet.create({});
