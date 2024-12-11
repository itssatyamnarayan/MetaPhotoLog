import {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  Dimensions,
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
          onPress={googleMap}>
          <Image source={ICONS.map} style={{width: '100%', height: '100%'}} />
          <View style={styles.expandMapwrapper}>
            <Text style={styles.expandText}>Expand Map</Text>
            <Image source={ICONS.whiteArrow} style={{width: 14, height: 14}} />
          </View>
        </Pressable>

        <View style={styles.headerContainer}>
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

    marginTop: 15,
  },
  headerContainer: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#E8E8EA',
  },
  gMapContainer: {
    width: Dimensions.get('screen').width / 1.08,
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 15,
    backgroundColor: '#D7E8E8',
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },
  pressed: {
    opacity: 0.75,
  },
  expandMapwrapper: {
    flexDirection: 'row',
    position: 'absolute',
    marginTop: Dimensions.get('screen').height / 2.7,
    backgroundColor: '#006D77',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5.6,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandText: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    textAlign: 'center',
  },
  minHeadText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    color: '#006D77',
    marginBottom: 5,
    marginHorizontal: 15,
  },
  lowHeadText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    marginBottom: 5,
    marginHorizontal: 15,
  },
  mapDateContainer: {
    paddingVertical: 10,
    marginBottom: 8,
    marginTop: 4,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#E8E8EA',
  },
  mapContainer: {
    flexDirection: 'row',
    paddingBottom: 15,
    marginHorizontal: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
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
    marginHorizontal: Dimensions.get('screen').width / 45.5,
  },
  textContainer: {
    marginBottom: 20,
    marginHorizontal: 15,
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
