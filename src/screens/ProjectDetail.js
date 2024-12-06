import {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import ICONS from '../../constants/icons';
import BottomButtons from '../components/BottomButtons';

const ProjectDetail = ({navigation}) => {
  function googleMap() {
    navigation.navigate('ProjectMap');
  }

  return (
    <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Pressable
          style={[
            ({pressed}) => pressed && styles.pressed,
            styles.gMapContainer,
          ]}
          onPress={googleMap}></Pressable>

        <View>
          <Text style={styles.minHeadText}>Google Inc.</Text>
          <Text style={styles.lowHeadText}>Google Pixel 7 Development</Text>
        </View>
        <View style={styles.mapDateContainer}>
          <View style={styles.mapContainer}>
            <Image source={ICONS.mapIcon} style={styles.img} />
            <Text style={styles.mapDateText}>SE-36-20-4-W2</Text>
          </View>
          <View style={styles.dateContainer}>
            <Image source={ICONS.forDate} style={styles.img} />
            <Text style={styles.mapDateText}>May 12, 2024 - May 24, 2024</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>Project Info.</Text>

          <Text style={styles.descriptionText}>
            The Google Pixel 7 Development project focuses on advancing the next
            generation of Google’s flagship smartphone by integrating advanced
            AI features.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <BottomButtons
            btn="Add Photo"
            bgClr="#D7E8E8"
            textClr="#006D77"
            onClick={() => {}}
          />
          <BottomButtons
            btn="Create Photolog"
            bgClr="#006D77"
            textClr="#ffffff"
            onClick={() => {}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(ProjectDetail);

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    marginHorizontal: 15,
    marginTop: 10,
  },
  gMapContainer: {
    paddingHorizontal: 150,
    paddingVertical: 170,
    backgroundColor: '#D7E8E8',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  pressed: {
    opacity: 0.75,
  },
  minHeadText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#006D77',
    marginBottom: 5,
  },
  lowHeadText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    marginBottom: 5,
  },
  mapDateContainer: {
    paddingVertical: 10,
    marginBottom: 8,
    marginTop: 4,
  },
  mapContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  mapDateText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
});
