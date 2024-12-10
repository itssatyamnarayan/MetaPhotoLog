import {memo, useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import HeaderButtons from './HeaderButtons';
import ICONS from '../../constants/icons';
import {useNavigation} from '@react-navigation/native';
import MaterialMenu from './MaterialMenu';

const ProjectBox = ({head, minHead, coordinate, duration}) => {
  const navigation = useNavigation();
  const [showDropDown, setShowDropDown] = useState(false);

  const viewProjectDetail = () => {
    navigation.navigate('ProjectDetail');
  };

  const handleAddPhotos = () => {
    navigation.navigate('AddPhotos');
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headContain}>
            <Text style={styles.headerText}>{head}</Text>
            {<MaterialMenu />}
          </View>

          <Text style={styles.headerInnerText}>{minHead}</Text>
        </View>
        <View style={styles.mapDateContainer}>
          <View style={styles.mapContainer}>
            <Image source={ICONS.mapIcon} style={styles.img} />
            <Text style={styles.mapDateText}>{coordinate}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Image source={ICONS.forDate} style={styles.img} />
            <Text style={styles.mapDateText}>{duration}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <HeaderButtons btn="Add Photo" onClick={handleAddPhotos} />
          </View>
          <View>
            <HeaderButtons
              btn="View Project Details"
              onClick={viewProjectDetail}
            />
          </View>
        </View>
        <View style={[styles.buttonContainer, {marginBottom: 15}]}>
          <View style={styles.button}>
            <HeaderButtons btn="View Photos (5)" onClick={() => {}} />
          </View>
          <View>
            <HeaderButtons btn="Create PhotoLog" onClick={() => {}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(ProjectBox);

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  container: {
    borderRadius: 10,
    marginVertical: 11,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 4,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#006D77',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingLeft: 10,
  },
  headContain: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.75,
  },
  imgDropDown: {
    flexDirection: 'row',
  },
  dropDowncontainer: {
    marginTop: 5,
  },
  threeDot: {
    width: 24,
    height: 24,
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#ffffff',
    paddingVertical: 10,
    //marginRight: 10,
  },
  headerInnerText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#ffffff',
    paddingBottom: 10,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  mapDateContainer: {
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 8,
    marginTop: 4,
  },
  mapContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  mapDateText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 22,
    marginBottom: 8,
  },
  button: {
    marginRight: 6,
  },
});
