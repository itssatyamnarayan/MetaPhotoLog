import {memo} from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';

const BottomButtons = ({btn, textClr, bgClr, onClick}) => {
  return (
    <View style={[styles.btnStyle, {backgroundColor: bgClr}]}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={onClick}>
        <Text style={[styles.text, {color: textClr}]}>{btn}</Text>
      </Pressable>
    </View>
  );
};

export default memo(BottomButtons);

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#D7E8E8',
    borderRadius: 10,
    width: 169.5,
    height: 46,
    justifyContent: 'center',
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});
