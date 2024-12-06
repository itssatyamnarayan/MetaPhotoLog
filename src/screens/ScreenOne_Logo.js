import {Image, View, Text, StyleSheet} from 'react-native';

export default function ScreenOne_Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainerOne}>
        <Image
          source={require('../assets/img/MPL_LogoFinal_Splash_1.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.innerContainerTwo}>
        <Image
          source={require('../assets/img/HomeIndicator.png')}
          style={styles.imageTwo}
        />
        <Text> Hello </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainerOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  innerContainerTwo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTwo: {
    height: 34,
    width: 380.25,
  },
});
