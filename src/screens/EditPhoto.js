import {memo} from 'react';
import {StyleSheet, ScrollView, Image, View} from 'react-native';
import EditCatpurePhoto from '../components/EditCatpurePhoto';

const EditPhoto = ({route}) => {
  const {source} = route.params;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <EditCatpurePhoto
        isEdit={true}
        description="The Google Pixel 7 Development project focuses on advancing the next generation of Google’s flagship smartphone by integrating advanced AI features."
        source={source}
      />
    </ScrollView>
  );
};

export default memo(EditPhoto);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
});
