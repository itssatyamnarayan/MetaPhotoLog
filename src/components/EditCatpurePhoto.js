import {memo} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import ICONS from '../../constants/icons';
import FormInput from './FormInput';
import DropDown from './DropDown';
import Buttons from './Buttons';

const data = [
  {label: 'East', value: '1'},
  {label: 'West', value: '2'},
  {label: 'North', value: '3'},
  {label: 'South', value: '4'},
  {label: 'NE', value: '5'},
  {label: 'SE', value: '6'},
  {label: 'SW', value: '7'},
  {label: 'NW', value: '8'},
];

const selectProject = [
  {label: 'Project 1', value: '1'},
  {label: 'Project 2', value: '2'},
  {label: 'Project 3', value: '3'},
  {label: 'Project 4', value: '4'},
  {label: 'Project 5', value: '5'},
];

const EditCapturePhoto = ({isEdit, description, source}) => {
  return (
    <>
      <View style={styles.capturedPhotoContainer}>
        <Image source={source} style={styles.capturedPhoto} />
        <View style={styles.iconsOnCapturePhoto}>
          <Image source={ICONS.mapIconWhite} style={styles.mapIcon} />
          <Text style={styles.mapText}>SE-36-20-4-W2</Text>
          <Image source={ICONS.camera} style={styles.camera} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, {color: '#006D77'}]}>Project Phoenix</Text>
        <Text style={styles.text}>Omega</Text>
      </View>
      <View>
        <FormInput
          configure={{
            label: 'Description',
            placeholder: 'Project details...',
            keyboardType: 'default',
            multiline: true,
          }}
          isProject={true}
          value={isEdit ? description : ''}
        />
        <View style={styles.dropDown}>
          <Text style={styles.label}>Photo Direction</Text>
          <DropDown dataItems={data} placeholder="NE" />
        </View>
        <FormInput
          configure={{
            label: 'Author',
            placeholder: 'Ronald Dahl',
            keyboardType: 'default',
          }}
          isProject={true}
        />
        <View style={styles.rowContainer}>
          <View style={styles.rowItem}>
            <FormInput
              configure={{
                label: 'Date',
                placeholder: 'May 12, 2024',
                keyboardType: 'default',
              }}
              isProject={true}
              isIcon={true}
              source={ICONS.datePick}
            />
          </View>
          <View style={styles.rowItem}>
            <FormInput
              configure={{
                label: 'Time',
                placeholder: '14:56',
                keyboardType: 'default',
              }}
              isProject={true}
              isIcon={true}
              source={ICONS.timePick}
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.rowItem}>
            <FormInput
              configure={{
                label: 'Latitude',
                placeholder: '39.7817° N',
                keyboardType: 'default',
              }}
              isProject={true}
            />
          </View>
          <View style={styles.rowItem}>
            <FormInput
              configure={{
                label: 'Longitude',
                placeholder: '89.6501° W',
                keyboardType: 'default',
              }}
              isProject={true}
            />
          </View>
        </View>
        {/* Edit Photo Screen */}
        {isEdit ? (
          <>
            <View style={styles.dropDown}>
              <Text style={styles.label}>Select Project</Text>
              <DropDown
                dataItems={selectProject}
                placeholder="Skyline Development"
              />
            </View>
            <View style={styles.lastContainer}>
              <View style={styles.header}>
                <Text style={styles.textHeader}>Urban Skyline Development</Text>
                <Image
                  source={ICONS.threeDotBlk}
                  style={{width: 24, height: 24}}
                />
              </View>
              <View style={styles.minHeader}>
                <Image source={ICONS.mapIcon} style={{width: 20, height: 20}} />
                <Text style={styles.textMinHeader}>SE-36-20-4-W2</Text>
              </View>
              <View style={styles.descriptionBox}>
                <Text style={styles.textDescription}>
                  Steel framework installation completed in the northeast
                  section of the 5th floor.
                </Text>
              </View>
              <View style={styles.codeContainer}>
                <View>
                  <Text style={styles.codeLabel}>Project Code</Text>
                  <View style={styles.textCodeContainer}>
                    <Text style={styles.codeLabel}>GP7-DVLP-2024</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.codeLabel}>Budget Code</Text>
                  <View style={styles.textCodeContainer}>
                    <Text style={styles.codeLabel}>BUD-PIX7-2024</Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          ''
        )}
        <View style={styles.btn}>
          <Buttons btn="Save" />
        </View>
      </View>
    </>
  );
};

export default memo(EditCapturePhoto);

const styles = StyleSheet.create({
  capturedPhotoContainer: {
    width: Dimensions.get('screen').width / 1.09,
    aspectRatio: 1,
    borderRadius: 12,
    marginHorizontal: 15,
    marginTop: 15,
  },
  iconsOnCapturePhoto: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: Dimensions.get('screen').height / 2.73,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 1.5},
    shadowOpacity: 1.5,
    shadowRadius: 10,
    elevation: 10,
  },
  mapIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  mapText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 15,
    marginLeft: 6,
  },
  camera: {
    width: 40,
    height: 40,
    marginLeft: Dimensions.get('screen').width / 2.3,
    marginBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  capturedPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    marginBottom: 10,
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    padding: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  rowItem: {
    flex: 1,
    marginHorizontal: 5,
  },
  btn: {
    marginBottom: 15,
    paddingBottom: 15,
  },

  //Edit Photo
  dropDown: {
    marginHorizontal: 5,
  },
  lastContainer: {
    marginHorizontal: 12,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  textHeader: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#006D77',
  },
  minHeader: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 5,
  },
  textMinHeader: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    marginLeft: 8,
    color: '#292D32',
  },
  descriptionBox: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 15,
    borderBottomWidth: 0.3,
    borderColor: 'grey',
    marginBottom: 10,
  },
  textDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#292D32',
  },
  codeContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
  },
  codeLabel: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#292D32',
  },
  textCodeContainer: {
    backgroundColor: '#F8F8F8',
    borderWidth: 0.3,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
});
