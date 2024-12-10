import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import FormInput from './FormInput';
import Buttons from './Buttons';
import {useNavigation} from '@react-navigation/native';
import ICONS from '../../constants/icons';
import BackgroundWrapper from './BackgroundWrapper';
import {memo} from 'react';

const Authenticate = ({headerText, btnName, isLogin, isAcc}) => {
  const navigation = useNavigation();

  function verifyLoginRegister() {
    if (!isLogin) {
      navigation.navigate('ProfileSetup');
    }
  }

  function loginRegisterHandler() {
    if (isLogin) {
      navigation.navigate('Register');
    } else {
      navigation.navigate('Login');
    }
  }

  return (
    <BackgroundWrapper>
      <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <View style={styles.innerContainerOne}>
            <Image source={ICONS.logo} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{headerText}</Text>
          </View>
          <View>
            <FormInput
              configure={{
                label: 'Email',
                keyboardType: 'email-address',
                autoCapitalize: 'none',
                autoCorrect: false,
                placeholder: 'Enter email address',
              }}
            />
            <FormInput
              configure={{
                label: 'Password',
                secureTextEntry: true,
                autoCapitalize: 'none',
                autoCorrect: false,
                placeholder: 'Enter Password',
              }}
            />
            <Buttons btn={btnName} onClick={verifyLoginRegister} />
            {isLogin && (
              <Pressable style={({pressed}) => pressed && styles.pressed}>
                <Text style={styles.forgetPass}>Forgot Password?</Text>
              </Pressable>
            )}
          </View>
          <View style={styles.createAcc}>
            <Text style={styles.innerCreate}>{isAcc}</Text>
            <Pressable
              style={({pressed}) => pressed && styles.pressed}
              onPress={loginRegisterHandler}>
              {isLogin ? (
                <Text style={styles.innerCreatAcc}>Create Account</Text>
              ) : (
                <Text style={styles.innerCreatAcc}>Login</Text>
              )}
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </BackgroundWrapper>
  );
};

export default memo(Authenticate);

const styles = StyleSheet.create({
  // background: {
  //   flex: 1,
  // },
  innerContainerOne: {
    alignItems: 'center',
    marginTop: 92,
    marginLeft: 12,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
    padding: 15,
  },
  text: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 28,
  },
  forgetPass: {
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    marginTop: 4,
  },
  createAcc: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  innerCreate: {
    marginRight: 4,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  innerCreatAcc: {
    color: '#006D77',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
