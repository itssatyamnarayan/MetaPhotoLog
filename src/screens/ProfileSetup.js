import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
import FormInput from '../components/FormInput';
import Buttons from '../components/Buttons';
import CountryPick from '../components/CountryPick';
import BackgroundWrapper from '../components/BackgroundWrapper';
import {memo} from 'react';
import {login} from '../store/authSlice';
import {useDispatch} from 'react-redux';

const ProfileSetup = () => {
  const dispatch = useDispatch();

  function projectScreen() {
    dispatch(login());
  }

  return (
    <BackgroundWrapper>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Profile Setup</Text>
        </View>
        <View style={styles.container}>
          <FormInput
            configure={{
              label: 'First Name',
              keyboardType: 'default',
              autoCorrect: false,
              autoCapitalize: 'words',
            }}
          />
          <FormInput
            configure={{
              label: 'Last Name',
              keyboardType: 'default',
              autoCorrect: false,
              autoCapitalize: 'words',
            }}
          />
          <FormInput
            configure={{
              label: 'Organization',
              keyboardType: 'default',
              autoCorrect: false,
              autoCapitalize: 'words',
            }}
          />

          <CountryPick />
          <FormInput
            configure={{
              label: 'Email',
              keyboardType: 'email-address',
              autoCapitalize: 'none',
              autoCorrect: false,
            }}
          />
        </View>
        <View style={styles.btn}>
          <Buttons btn="Continue" onClick={projectScreen} />
        </View>
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default memo(ProfileSetup);

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 20 : 50,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
  },
  container: {
    marginTop: 26,
    marginHorizontal: 12,
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
  },
});
