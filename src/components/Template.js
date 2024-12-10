import {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ICONS from '../../constants/icons';

const Template = ({temp1, temp2}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={temp1} style={styles.img} />
      </View>
      <View style={styles.imgContainer}>
        <Image source={temp2} style={styles.img} />
      </View>
    </View>
  );
};

export default memo(Template);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  imgContainer: {
    borderRadius: 8.75,
    marginLeft: 10,
    width: 174,
    height: 371,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8.75,
  },
});
