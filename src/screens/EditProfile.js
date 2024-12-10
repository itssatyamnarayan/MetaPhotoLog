import {memo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FormInput from '../components/FormInput';
import CountryPick from '../components/CountryPick';
import Buttons from '../components/Buttons';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <FormInput
        configure={{
          label: 'First Name',
          placeholder: 'Ronald',
          KeyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Last Name',
          placeholder: 'Dahl',
          KeyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Organization',
          placeholder: 'Metta',
          KeyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Email',
          placeholder: 'ronalddahl@gmail.com',
          KeyboardType: 'default',
        }}
        isProject={true}
      />
      <CountryPick isEditProfile={true} />

      <View style={styles.btn}>
        <Buttons btn="Save" />
      </View>
    </View>
  );
};

export default memo(EditProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
  },
  btn: {
    marginTop: 100,
  },
});
