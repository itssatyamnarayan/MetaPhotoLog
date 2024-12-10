import {memo} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import EditCatpurePhoto from '../components/EditCatpurePhoto';
import ICONS from '../../constants/icons';

const CapturePhoto = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <EditCatpurePhoto source={ICONS.img2} />
    </ScrollView>
  );
};

export default memo(CapturePhoto);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
});
