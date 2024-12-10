import {memo} from 'react';
import DropDown from '../components/DropDown';
import {ScrollView, View, StyleSheet} from 'react-native';
import SelectUnselect from '../components/SelectUnselect';
import ICONS from '../../constants/icons';
import Buttons from '../components/Buttons';

const projects = [
  {label: 'Project 1', value: '11'},
  {label: 'Project 2', value: '12'},
  {label: 'Project 3', value: '13'},
  {label: 'Project 4', value: '14'},
  {label: 'Project 5', value: '15'},
  {label: 'Project 6', value: '16'},
  {label: 'Project 7', value: '17'},
  {label: 'Project 8', value: '18'},
];

const Images = [
  {source: ICONS.img1, id: '1'},
  {source: ICONS.img2, id: '2'},
  {source: ICONS.img3, id: '3'},
  {source: ICONS.img4, id: '4'},
];
const oldImages = [
  {source: ICONS.img5, id: '5'},
  {source: ICONS.img6, id: '6'},
  {source: ICONS.img7, id: '7'},
  {source: ICONS.img9, id: '7'},
];

const AddPhotos = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dropDown}>
          <DropDown placeholder="Select Project" dataItems={projects} />
        </View>
        <View style={styles.img}>
          <SelectUnselect day="Today" images={Images} />
        </View>
        <View style={styles.img}>
          <SelectUnselect day="May 12, 2024" images={oldImages} />
        </View>
      </ScrollView>
      <View style={styles.btn}>
        <Buttons btn="Add To PhotoLog" />
      </View>
    </View>
  );
};

export default memo(AddPhotos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  dropDown: {
    marginTop: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  img: {
    marginBottom: 10,
  },
  btn: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
