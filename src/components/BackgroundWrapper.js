import {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ICONS from '../../constants/icons';

const BackgroundWrapper = ({children}) => {
  return (
    <View style={[styles.root]}>
      <Image source={ICONS.background} style={styles.img} />
      {children}
    </View>
  );
};

export default memo(BackgroundWrapper);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});
