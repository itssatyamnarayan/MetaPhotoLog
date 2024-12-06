import {memo} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import ICONS from '../../constants/icons';
import FormInput from './FormInput';

const CreateEditProject = () => {
  return (
    <>
      <View style={styles.logoContainer}>
        <Pressable style={({pressed}) => pressed && styles.pressed}>
          <View style={styles.logo}>
            <Image source={ICONS.plusIcon} style={{width: 24, height: 24}} />
          </View>
        </Pressable>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <FormInput
        configure={{
          label: 'Client',
          placeholder: 'e.g. XYZ Inc.',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Project Name',
          placeholder: 'e.g. Project Phoenix',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Location',
          placeholder: 'e.g. SW-01-001-01 W1M / 123 Main St.',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Project Code',
          placeholder: 'e.g. 12345-123',
          keyboardType: 'number-pad',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Budget Code',
          placeholder: 'e.g. 2025001RE',
          keyboardType: 'default',
        }}
        isProject={true}
      />
      <FormInput
        configure={{
          label: 'Description',
          placeholder: 'Project details...',
          keyboardType: 'default',
          multiline: true,
        }}
        isProject={true}
      />
    </>
  );
};

export default memo(CreateEditProject);

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    borderRadius: 75,
    width: 75,
    height: 75,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  logoText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
});
