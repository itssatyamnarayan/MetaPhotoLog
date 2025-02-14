import {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ICONS from '../../constants/icons';

const MainMenuButtons = ({icon, title, onClick}) => {
  return (
    <>
      <Pressable style={styles.btn} onPress={onClick}>
        <View style={styles.rowBtn}>
          <View style={styles.rowIcon}>
            <Image source={icon} style={styles.img} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <Image source={ICONS.arrowRight} style={styles.img} />
        </View>
      </Pressable>
    </>
  );
};

export default memo(MainMenuButtons);

const styles = StyleSheet.create({
  btn: {
    borderBottomWidth: 0.2,
    paddingVertical: 18,
    borderColor: 'grey',
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#434343',
    marginLeft: 10,
  },
});
