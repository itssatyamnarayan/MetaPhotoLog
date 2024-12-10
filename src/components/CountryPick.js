import CountryPicker from 'react-native-country-picker-modal';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {memo, useState} from 'react';
import ICONS from '../../constants/icons';

const CountryPick = ({isEditProfile}) => {
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  function onSelect(country) {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setIsPickerVisible(false);
  }

  function setPhoneNo(enteredValue) {
    setPhoneNumber(enteredValue);
  }

  const placeholder = isEditProfile ? '(415) 555-1234' : 'Enter Phone Number';
  const backgroundColor = isEditProfile ? '#F8F8F8' : '#FFFFFF';

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Phone Number</Text>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            onPress={() => setIsPickerVisible(true)}
            style={styles.dropDown}>
            <Text>+{callingCode}</Text>
            <Image source={ICONS.dropDown} style={styles.img} />
          </TouchableOpacity>
          <TextInput
            placeholder={placeholder}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNo}
            style={styles.innerPhoneInputContainer}
          />
        </View>

        {isPickerVisible && (
          <CountryPicker
            countryCode={countryCode}
            withModal
            withCallingCode
            withFlagButton={false}
            onSelect={onSelect}
            visible={isPickerVisible}
            onClose={() => setIsPickerVisible(false)}
            style={styles.innerCodePicker}
          />
        )}
      </View>
    </View>
  );
};

export default memo(CountryPick);

const styles = StyleSheet.create({
  root: {
    marginBottom: 24,
  },
  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    padding: 10,
  },
  container: {
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
  },
  phoneInputContainer: {
    flexDirection: 'row',
  },
  dropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#E8E8EA',
    paddingHorizontal: 16,
  },
  img: {
    marginLeft: 14,
  },
  innerPhoneInputContainer: {
    padding: 16,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
});
