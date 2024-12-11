import {memo, useState} from 'react';
import {View, StyleSheet, ScrollView, Image, TextInput} from 'react-native';
import ICONS from '../../constants/icons';
import Logs from '../components/Logs';

const PhotoLogs = ({}) => {
  const [searchQuery, setSearchQuery] = useState();

  function searchProject(enteredValue) {
    setSearchQuery(enteredValue);
  }

  return (
    <ScrollView
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <Image source={ICONS.searchIcon} style={{width: 24, height: 24}} />
        </View>
        <TextInput
          onChangeText={searchProject}
          value={searchQuery}
          style={styles.textInput}
          keyboardType="default"
          placeholder="Search photologs..."
        />
      </View>
      <Logs
        duration="Oct 8, 2024"
        heading="The Balance"
        description="The Balance Spa Renovation Journey"
      />
      <Logs
        duration="May 2, 2024 - May 12, 2024"
        heading="Skyline Development"
        description="Urban Skyline Development Photolog"
      />
    </ScrollView>
  );
};

export default memo(PhotoLogs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    borderRadius: 12,
    padding: Platform.OS === 'android' ? 5 : 12,
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#fdfdfe',
    borderWidth: 0.3,
    borderColor: 'grey',
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
