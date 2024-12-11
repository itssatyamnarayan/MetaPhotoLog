import {memo, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Pressable,
  Dimensions,
} from 'react-native';
import ICONS from '../../constants/icons';
import {useNavigation} from '@react-navigation/native';
import MaterialMenu from './MaterialMenu';

const SelectUnselect = ({images, day, setSelectedImageCount, isAllSelect}) => {
  const navigation = useNavigation();

  const [isSelectedImage, setIsSelectedImage] = useState(
    new Array(images.length).fill(false),
  );
  const [currentImageCount, setCurrentImageCount] = useState(0);

  const handleSelectImageVisible = index => {
    const selectedImage = [...isSelectedImage];
    selectedImage[index] = !selectedImage[index];

    if (selectedImage[index]) {
      isAllSelect ? setSelectedImageCount(prevCount => prevCount + 1) : '';
      setCurrentImageCount(prevCount => prevCount + 1);
    } else {
      isAllSelect ? setSelectedImageCount(prevCount => prevCount - 1) : '';
      setCurrentImageCount(prevCount => prevCount - 1);
    }

    setIsSelectedImage(selectedImage);
  };

  const allSelectImage = () => {
    const allSelected = isSelectedImage.every(selected => selected);
    const newSelectedImage = new Array(images.length).fill(!allSelected);

    if (newSelectedImage.every(selected => selected)) {
      isAllSelect
        ? setSelectedImageCount(
            prevCount => (prevCount = prevCount + images.length),
          )
        : '';
      setCurrentImageCount(prevCount => (prevCount = images.length));
    } else {
      isAllSelect
        ? setSelectedImageCount(prevCount =>
            prevCount > 0
              ? (prevCount = prevCount - images.length)
              : (prevCount = 0),
          )
        : '';
      setCurrentImageCount(prevCount => (prevCount = 0));
    }
    setIsSelectedImage(newSelectedImage);
  };

  const handleRenderImages = ({item, index}) => {
    const imageSource = item.source;
    return (
      <View style={styles.imgRootContainer}>
        <View style={styles.imgContainer}>
          <Pressable onPress={() => handleSelectImageVisible(index)}>
            <Image source={item.source} style={styles.img} />
            {isSelectedImage[index] ? (
              <Image source={ICONS.selected} style={styles.unSelectedImg} />
            ) : (
              <Image source={ICONS.unSelected} style={styles.unSelectedImg} />
            )}
          </Pressable>
          <View style={styles.threeDotContainer}>
            <MaterialMenu isEditPhoto={true} source={imageSource} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {day} ({currentImageCount})
        </Text>
        <Pressable onPress={allSelectImage}>
          {isSelectedImage.every(selected => selected) ? (
            <Image source={ICONS.selected} style={{width: 22, height: 22}} />
          ) : (
            <Image
              source={ICONS.allUnSelected}
              style={{width: 22, height: 22}}
            />
          )}
        </Pressable>
      </View>

      <FlatList
        data={images}
        renderItem={handleRenderImages}
        numColumns={3}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default memo(SelectUnselect);

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  imgRootContainer: {
    marginTop: 5,
  },
  imgContainer: {
    position: 'relative',
    width: Dimensions.get('screen').width / 3.09,
    aspectRatio: 1,
  },
  row: {
    gap: 5.9,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  unSelectedImg: {
    width: 22,
    height: 22,
    position: 'absolute',
    zIndex: 1,
    marginTop: 8,
    marginLeft: 7,
  },
  threeDotContainer: {
    position: 'absolute',
    marginLeft: 100,
    marginTop: 8,
    elevation: 5,
  },
});
