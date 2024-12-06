import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import {memo, useState} from 'react';

const FormInput = ({configure, isProject}) => {
  // const [enteredValue, setEnteredValue] = useState({
  //   email: '',
  //   password: '',
  // });
  // function inputChangeHandler(type, value) {
  //   setEnteredValue(prevValue => {
  //     return {
  //       ...prevValue,
  //       [type]: value,
  //     };
  //   });
  // }

  const root = isProject
    ? {
        marginBottom: 10,
      }
    : {
        marginBottom: 24,
      };

  const bgClr = isProject
    ? {
        backgroundColor: '#F8F8F8',
      }
    : {
        backgroundColor: '#ffffff',
      };

  const multiLine = configure.multiline
    ? {
        paddingBottom: 50,
      }
    : {};

  return (
    <View style={root}>
      <Text style={styles.text}>{configure.label}</Text>
      <View style={[styles.container, bgClr, multiLine]}>
        <TextInput
          // onChangeText={inputChangeHandler.bind(this, type)}
          {...configure}
          //value={enteredValue.password}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default memo(FormInput);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    padding: 10,
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: Platform.OS === 'android' ? 5 : 16,
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    paddingLeft: 5,
  },
});
