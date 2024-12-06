import {memo} from 'react';
import {StyleSheet, View} from 'react-native';

const Map = () => {
  return <View style={styles.container}></View>;
};

export default memo(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E8E8',
  },
});
