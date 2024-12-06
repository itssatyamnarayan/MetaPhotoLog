import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
import FormInput from '../components/FormInput';
import Buttons from '../components/Buttons';
import CountryPick from '../components/CountryPick';
import BackgroundWrapper from '../components/BackgroundWrapper';
import {memo} from 'react';

const ProfileSetup = ({navigation}) => {
  function projectScreen() {
    navigation.navigate('BottomTabs');
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

        <Buttons btn="Continue" onClick={projectScreen} />
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default memo(ProfileSetup);

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 45 : 70,
    padding: Platform.OS == 'android' ? 0 : 15,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
  },
  container: {
    marginTop: 26,
    marginHorizontal: 12,
  },
});
