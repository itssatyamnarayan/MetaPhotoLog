import {memo} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import CreateEditProject from '../components/CreateEditProject';
import Buttons from '../components/Buttons';

const EditProject = () => {
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={styles.root}>
      <View style={styles.rootLower}>
        <CreateEditProject />
        <Buttons btn="Save Project" />
      </View>
    </ScrollView>
  );
};

export default memo(EditProject);

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  rootLower: {
    marginBottom: 30,
  },
});
