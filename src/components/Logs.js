import {memo} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import ICONS from '../../constants/icons';
import MaterialMenu from './MaterialMenu';

const Logs = ({duration, heading, description}) => {
  return (
    <View style={styles.logContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>{duration}</Text>
        </View>
        <MaterialMenu isEditPhotoLog={true} />
      </View>
      <Text style={styles.textMinHeader}>{heading}</Text>
      <Text style={styles.text}>{description}</Text>
      <Image source={ICONS.log1} style={styles.img} />
    </View>
  );
};

export default memo(Logs);

const styles = StyleSheet.create({
  logContainer: {
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#006D7712',
    padding: 10,
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    position: 'relative',
    borderBottomWidth: 8,
    borderColor: '#CEE4E4',
  },
  textHeader: {
    color: '#006D77',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    marginBottom: -20,
  },
  textMinHeader: {
    color: '#006D77',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  text: {
    marginVertical: 7,
    fontFamily: 'OpenSans-Medium',
    fontSize: 14,
    color: '#4B5F5F',
  },
  img: {
    width: 65,
    height: 40,
    marginTop: 25,
  },
});
