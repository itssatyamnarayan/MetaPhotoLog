import {memo} from 'react';
import {Pressable, Text, StyleSheet, View, Platform} from 'react-native';

const HeaderButtons = ({btn, isHeader, onClick}) => {
  const btnStyle = isHeader
    ? {
        backgroundColor: '#ffffff',
        paddingTop: 6,
        paddingRight: 8,
        paddingBottom: 6,
        paddingLeft: 8,
        borderRadius: 5,
        marginRight: 8,
        marginBottom: Platform.OS === 'ios' ? 10 : 0,
      }
    : {
        backgroundColor: '#D7E8E8',
        borderRadius: 5,
        width: 159.5,
        height: 35,
      };

  const textStyle = isHeader
    ? {
        color: '#006D77',
      }
    : {
        color: '#5C546A',
        paddingTop: 8,
      };

  return (
    <View style={btnStyle}>
      <Pressable
        style={({pressed}) => pressed && styles.pressed}
        onPress={onClick}>
        <Text style={[styles.text, textStyle]}>{btn}</Text>
      </Pressable>
    </View>
  );
};

export default memo(HeaderButtons);

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    textAlign: 'center',
  },
});
