import {memo, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import ICONS from '../../constants/icons';
import ProjectBox from '../components/ProjectBox';

const Projects = ({}) => {
  const [searchQuery, setSearchQuery] = useState();

  function searchProject(enteredValue) {
    setSearchQuery(enteredValue);
  }

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.container}>
        <View style={styles.searchIcon}>
          <Image source={ICONS.searchIcon} style={{width: 24, height: 24}} />
        </View>
        <TextInput
          onChangeText={searchProject}
          value={searchQuery}
          style={styles.textInput}
          keyboardType="default"
          placeholder="Search Project"
        />
      </View>
      <ProjectBox
        head="Windows 11 Feature Rollout"
        minHead="Microsoft Corporation"
        coordinate="NW-24-17-3-W3"
        duration="Oct 1, 2024 - Oct 31, 2024"
      />
      <ProjectBox
        head="Google Pixel 7 Development"
        minHead="Google Inc."
        coordinate="SE-36-20-4-W2"
        duration="May 12, 2024 - May 24, 2024"
      />
    </ScrollView>
  );
};

export default memo(Projects);

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: Platform.OS === 'android' ? 5 : 12,
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#FAFAFA',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    paddingLeft: 5,
  },
  searchIcon: {
    marginRight: 10,
    justifyContent: 'center',
    paddingLeft: Platform.OS === 'android' ? 5 : 0,
  },
});
