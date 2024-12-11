import {memo, useState} from 'react';
import {Menu, MenuItem} from 'react-native-material-menu';
import {View, StyleSheet, Pressable, Image, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ICONS from '../../constants/icons';

const MaterialMenu = ({isHeaderRight, isEditPhoto, source, isEditPhotoLog}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const headerStyle = isHeaderRight
    ? {
        marginLeft: Platform.OS === 'ios' ? 155 : 0,
        marginTop: Platform.OS === 'ios' ? 55 : 0,
      }
    : {};

  function handleEditProject() {
    if (isEditPhoto) {
      navigation.navigate('EditPhoto', {source});
    } else if (isEditPhotoLog) {
      navigation.navigate('EditPhotoLog');
    } else {
      navigation.navigate('EditProject');
    }
    setVisible(false);
  }

  function showMenu() {
    setVisible(true);
  }

  function hideMenu() {
    setVisible(false);
  }

  const icon = isEditPhotoLog ? ICONS.threeDotGreen : ICONS.threeDots;

  return (
    <View style={[{marginRight: !isHeaderRight ? 10 : -10}, styles.container]}>
      <Menu
        visible={visible}
        onRequestClose={hideMenu}
        animationDuration={200}
        anchor={
          <Pressable
            onPress={showMenu}
            style={({pressed}) => pressed && styles.pressed}>
            <Image source={icon} style={styles.threeDots} />
          </Pressable>
        }
        style={[styles.menu, headerStyle]}>
        <MenuItem onPress={handleEditProject}>Edit</MenuItem>
        <MenuItem onPress={hideMenu}>Delete</MenuItem>
      </Menu>
    </View>
  );
};

export default memo(MaterialMenu);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  threeDots: {
    width: 24,
    height: 24,
  },
  menu: {
    color: '#006D77',
    padding: 0,
  },
  pressed: {
    opacity: 0.85,
  },
});
