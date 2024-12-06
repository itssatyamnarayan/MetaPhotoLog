import {memo} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Buttons from '../components/Buttons';
import CreateEditProject from '../components/CreateEditProject';

const CreateProject = () => {
  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      style={styles.root}>
      <View style={styles.rootLower}>
        <CreateEditProject />
        <Buttons btn="Create Project" />
      </View>
    </ScrollView>
  );
};

export default memo(CreateProject);

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  rootLower: {
    marginBottom: 30,
  },
});
