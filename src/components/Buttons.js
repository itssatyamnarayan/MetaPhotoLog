import {memo} from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';

const Buttons = ({btn, onClick}) => {
  return (
    <Pressable
      style={({pressed}) => pressed && styles.pressed}
      onPress={onClick}>
      <View style={styles.login}>
        <Text style={styles.text}>{btn}</Text>
      </View>
    </Pressable>
  );
};

export default memo(Buttons);

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#006D77',
    padding: 14,
    borderRadius: 12,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 4,
  },
  pressed: {
    opacity: 0.95,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
