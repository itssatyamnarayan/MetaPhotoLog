import {memo} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import DropDown from '../components/DropDown';
import ICONS from '../../constants/icons';

const data = [];

const Photos = ({}) => {
  return (
    <View style={styles.container}>
      <DropDown
        dataItems={[
          {label: 'Item 1', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'},
          {label: 'Item 4', value: '4'},
          {label: 'Item 5', value: '5'},
          {label: 'Item 6', value: '6'},
          {label: 'Item 7', value: '7'},
          {label: 'Item 8', value: '8'},
        ]}
      />
      <View>
        <View>
          <Text>Today (4)</Text>
          <View style={styles.imgRootContainer}>
            <View style={styles.imgContainer}>
              <Image source={ICONS.img1} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
              <Image source={ICONS.img2} style={styles.img} />
            </View>
            <View style={styles.imgContainer}>
              <Image source={ICONS.img3} style={styles.img} />
            </View>
          </View>
        </View>
      </View>
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
  imgRootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgContainer: {
    width: 121,
    height: 121,
    marginRight: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
