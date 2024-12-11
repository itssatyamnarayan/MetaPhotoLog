import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  Pressable,
} from 'react-native';
import {memo, useState} from 'react';

import DateTimePick from './DateTimePick';

const FormInput = ({configure, isProject, isIcon, source, value}) => {
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

  const mode = isIcon && configure.label === 'Date' ? 'date' : 'time';

  const [isDateVisible, setIsDateVisible] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: '',
    time: '',
  });

  const handleDateTime = () => {
    setIsDateVisible(!isDateVisible);
  };

  const handleDateTimeConfirm = dateTime => {
    if (mode === 'date') {
      const formattedDate = dateTime.toLocaleDateString();
      setSelectedDateTime(prevDateTime => ({
        ...prevDateTime,
        date: formattedDate,
      }));
    } else {
      const formattedTime = dateTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setSelectedDateTime(prevDateTime => ({
        ...prevDateTime,
        time: formattedTime,
      }));
    }

    handleDateTime();
  };

  // const root = isProject
  //   ? {
  //       marginBottom: 10,
  //     }
  //   : {
  //       marginBottom: 10,
  //     };

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
    <View style={styles.root}>
      {isIcon ? (
        <DateTimePick
          visible={isDateVisible}
          onCancel={handleDateTime}
          onConfirm={handleDateTimeConfirm}
          mode={mode}
        />
      ) : null}
      <Text style={styles.text}>{configure.label}</Text>
      <View style={[styles.container, bgClr, multiLine]}>
        <View style={styles.rowIcon}>
          <TextInput
            // onChangeText={inputChangeHandler.bind(this, type)}
            {...configure}
            //value={enteredValue.password}
            style={styles.textInput}
            value={
              isIcon
                ? mode === 'date'
                  ? selectedDateTime.date
                  : selectedDateTime.time
                : value
            }
          />

          {isIcon ? (
            <Pressable onPress={handleDateTime}>
              <Image source={source} style={styles.picker} />
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default memo(FormInput);

const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    padding: 10,
    marginLeft: 5,
  },
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 10,
    padding: Platform.OS === 'android' ? 5 : 16,
    borderWidth: 0.3,
    borderColor: 'grey',
  },
  textInput: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    paddingLeft: 5,
  },
  picker: {
    width: 18,
    height: 18,
  },
  rowIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
