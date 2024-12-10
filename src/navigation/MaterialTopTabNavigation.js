import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {memo} from 'react';
import AllPhoto from '../screens/Photos/AllPhoto';
import Photo_One from '../screens/Photos/Photo_One';
import Photo_Four from '../screens/Photos/Photo_Four';
import Photo_Six from '../screens/Photos/Photo_Six';

const TopTab = createMaterialTopTabNavigator();

const MaterialTopTabNavigation = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="All" component={AllPhoto} />
      <TopTab.Screen
        name="1Photo"
        component={Photo_One}
        options={{
          title: '1 Photo',
        }}
      />
      <TopTab.Screen
        name="4Photo"
        component={Photo_Four}
        options={{
          title: '4 Photo',
        }}
      />
      <TopTab.Screen
        name="6Photo"
        component={Photo_Six}
        options={{
          title: '6 Photo',
        }}
      />
    </TopTab.Navigator>
  );
};

export default memo(MaterialTopTabNavigation);
