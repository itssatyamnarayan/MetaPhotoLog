import {memo} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import CreateEditPhotoLog from '../components/CreateEditPhotoLog';

const CreatePhotoLog = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <CreateEditPhotoLog title="e.g. First Bash" />
    </ScrollView>
  );
};

export default memo(CreatePhotoLog);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
  },
});
