import {memo, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import DropDown from '../components/DropDown';
import ICONS from '../../constants/icons';
import SelectUnselect from '../components/SelectUnselect';
import Buttons from '../components/Buttons';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
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
];

const Photos = ({navigation}) => {
  const [selectedImageCount, setSelectedImageCount] = useState(0);

  const handleCreatePhotoLog = () => {
    navigation.navigate('CreatePhotoLog');
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DropDown dataItems={data} placeholder="Select Project" />
        <View style={styles.imgContainer}>
          <SelectUnselect
            images={Images}
            day="Today"
            setSelectedImageCount={setSelectedImageCount}
            isAllSelect={true}
          />
        </View>
        <View style={styles.imgContainer}>
          <SelectUnselect
            images={oldImages}
            day="May 12, 2024"
            setSelectedImageCount={setSelectedImageCount}
            isAllSelect={true}
          />
        </View>
      </ScrollView>

      <Buttons
        btn={`Create PhotoLog (${selectedImageCount})`}
        onClick={handleCreatePhotoLog}
      />
    </View>
  );
};

export default memo(Photos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ffffff',
  },
  imgContainer: {
    marginTop: 7,
    marginBottom: 5,
  },
});
