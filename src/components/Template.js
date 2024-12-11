import {memo} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

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
    gap: 5,
    marginTop: 15,
  },
  imgContainer: {
    borderRadius: 8.75,
    marginLeft: 10,
    width: Dimensions.get('screen').width / 2.3,
    height: 371,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 8.75,
  },
});
