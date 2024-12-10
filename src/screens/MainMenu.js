import {memo} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainMenuButtons from '../components/MainMenuButtons';
import ICONS from '../../constants/icons';

const MainMenu = ({navigation}) => {
  const handleSubscription = () => {
    navigation.navigate('Subscription');
  };
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.menuText}>Main Menu</Text>
          <Text style={[styles.text, {color: '#8BF5FF'}]}>Welcome Back,</Text>
          <Text style={styles.text}>Ronald Dahl!</Text>
        </View>
        <View style={styles.subscribeContainer}>
          <View style={styles.premiumTextContainer}>
            <Text style={styles.premiumText}>
              Switch to Premium, Starting @
            </Text>
            <Text style={styles.premiumText}>
              only{' '}
              <Text style={{color: '#006D77', fontFamily: 'OpenSans-SemiBold'}}>
                $2.99
              </Text>{' '}
              per month
            </Text>
          </View>
          <LinearGradient
            colors={['#006D77', '#2FA9B5']}
            style={styles.gradient}>
            <Pressable style={styles.btn} onPress={handleSubscription}>
              <Text style={styles.btnText}>Subscribe</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.container}>
        <MainMenuButtons
          icon={ICONS.menuBtn1}
          title="PhotoLog Templates"
          btn="btn1"
        />
        <MainMenuButtons
          icon={ICONS.menuBtn2}
          title="Edit Profile"
          btn="btn2"
        />
        <MainMenuButtons
          icon={ICONS.menuBtn3}
          title="Change Password"
          btn="btn3"
        />
        <MainMenuButtons
          icon={ICONS.menuBtn4}
          title="Help & Support"
          btn="btn4"
        />
        <MainMenuButtons
          icon={ICONS.menuBtn5}
          title="Privacy Policy"
          btn="btn5"
        />
        <MainMenuButtons
          icon={ICONS.menuBtn6}
          title="Terms & Conditions"
          btn="btn6"
        />
        <MainMenuButtons
          icon={ICONS.menuBtn7}
          title="Delete Account"
          btn="btn7"
        />
        <MainMenuButtons icon={ICONS.menuBtn8} title="Logout" btn="btn8" />
        <Text style={styles.versionText}>V 1.2.0.1</Text>
      </View>
    </>
  );
};

export default memo(MainMenu);

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.3,
    backgroundColor: '#006D77',
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
  },
  textContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 15,
  },

  text: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 11,
  },
  subscribeContainer: {
    marginHorizontal: 10,
    backgroundColor: '#F1F4FE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F1F4FE',
    marginTop: 15,
    elevation: 4,
    shadowColor: '#F1F4FE',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  premiumTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  premiumText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#292D32',
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  gradient: {
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
  },
  btnText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  container: {
    flex: 0.7,
    marginHorizontal: 10,
    marginTop: 10,
  },
  versionText: {
    textAlign: 'center',
    marginTop: 27,
    color: '#006D77',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 12,
  },
});
