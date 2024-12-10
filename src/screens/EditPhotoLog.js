import {memo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CreateEditPhotoLog from '../components/CreateEditPhotoLog';

const EditPhotoLog = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CreateEditPhotoLog title="First Bash" />
    </ScrollView>
  );
};

export default memo(EditPhotoLog);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
  },
});
