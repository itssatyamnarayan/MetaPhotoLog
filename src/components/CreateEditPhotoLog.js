import {memo} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

import FormInput from './FormInput';
import DropDown from './DropDown';
import ICONS from '../../constants/icons';
import Buttons from './Buttons';

const photoLogs = [
  {label: 'Red', value: '1'},
  {label: 'Yellow', value: '2'},
  {label: 'Green', value: '3'},
  {label: 'Blue', value: '1'},
  {label: 'White', value: '1'},
];

const photos = [
  {source: ICONS.img4, id: '1'},
  {source: ICONS.img3, id: '2'},
  {source: ICONS.img8, id: '3'},
  {source: ICONS.img2, id: '4'},
  {source: ICONS.img1, id: '5'},
  {source: ICONS.img7, id: '6'},
];

const CreateEditPhotoLog = ({title}) => {
  return (
    <>
      <FormInput
        configure={{
          label: 'PhotoLog Title',
          placeholder: title,
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Client',
          placeholder: 'XYZ Inc.',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Project Name',
          placeholder: 'Project Phoenix',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Location',
          placeholder: 'SW-01-001-01 W1M / 123 Main St.',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <View style={styles.dropDownLabelContainer}>
        <Text style={styles.text}>PhotoLog Template</Text>
        <View style={styles.colorTextContainer}>
          <Text style={styles.colorText}>View Templates</Text>
        </View>
      </View>
      <View style={styles.dropDown}>
        <DropDown placeholder="4 Photo - Red" dataItems={photoLogs} />
      </View>

      <View style={styles.dropDownLabelContainer}>
        <Text style={styles.text}>Photos (2)</Text>
        <View style={styles.colorTextContainer}>
          <Text style={styles.colorText}>Edit Photos</Text>
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={photos}
          renderItem={({item}) => (
            <View style={styles.photoBox}>
              <Image source={item.source} style={{width: 120, height: 120}} />
              <Image source={ICONS.tick} style={styles.tick} />
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          scrollEnabled={false}
          columnWrapperStyle={styles.row}
        />
      </View>
      <View style={styles.btn}>
        <Buttons btn="Create PhotoLog" />
      </View>
    </>
  );
};

export default memo(CreateEditPhotoLog);

const styles = StyleSheet.create({
  dropDownLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    padding: 8,
  },
  colorTextContainer: {
    backgroundColor: '#EDF5F5',
    borderRadius: 5,
    marginRight: 5,
  },
  colorText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#006D77',
    padding: 8,
  },
  dropDown: {
    marginHorizontal: 5,
    marginBottom: 10,
  },
  photoBox: {
    backgroundColor: 'red',
    marginBottom: 5,
    position: 'relative',
  },
  row: {
    gap: 5,
  },
  flatListContainer: {
    marginHorizontal: 15,
  },
  tick: {
    width: 24,
    height: 24,
    position: 'absolute',
    marginLeft: 85,
    marginTop: 10,
  },
  btn: {
    marginBottom: 25,
    marginHorizontal: 5,
  },
});
