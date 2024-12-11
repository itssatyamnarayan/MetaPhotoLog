import {memo} from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ICONS from '../../constants/icons';
import SubscriptionPlan from '../components/SubscriptionPlan';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Subscription = ({navigation}) => {
  const {top} = useSafeAreaInsets();

  const handleCross = () => {
    navigation.navigate('BottomTabs');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View
        style={[
          styles.minContainer,
          {marginTop: Platform.OS === 'android' ? 10 : top - 5},
        ]}>
        <View style={styles.header}>
          <Pressable style={styles.crossIcon} onPress={handleCross}>
            <Image source={ICONS.cross} style={{width: 32, height: 32}} />
          </Pressable>
          <Text style={styles.headText}>Unlock All Features</Text>
        </View>

        <SubscriptionPlan
          plan="Free Plan"
          benefit1="1 project & 10 images"
          benefit2="1 PhotoLog Template"
        />
        <SubscriptionPlan
          plan="Standard Plan"
          benefit1="5 projects & 50 images"
          benefit2="6 PhotoLog Templates"
          isPlan="standard"
          validity="One time purchase"
          price="$4.99"
        />
        <SubscriptionPlan
          plan="Professional Plan"
          benefit1="Unlimited projects and images"
          benefit2="Customizable PhotoLog Templates"
          isPlan="professional"
        />
        <SubscriptionPlan
          plan="Enterprise Plan"
          benefit1="Company-wide access for teams."
          benefit2="Volume pricing for 10+ users."
          isPlan="enterprise"
        />

        <LinearGradient colors={['#FFFFFF', '#F1F4FE']} style={styles.gradient}>
          <Pressable style={styles.button}>
            <View style={styles.txtWrapper}>
              <Text style={styles.textBtn}>Upgrade to Pro</Text>
            </View>

            <Image
              source={ICONS.greeRightArrow}
              style={{width: 24, height: 24, paddingBottom: 2}}
            />
          </Pressable>
        </LinearGradient>
        <View style={styles.bottomContainer}>
          <Text style={[styles.textBtn, {color: '#FFFFFF'}]}>Restore</Text>
          <View style={styles.tncWrapper}>
            <Pressable>
              <Text style={styles.tncText}>Terms & Conditions </Text>
            </Pressable>
            <Image source={ICONS.point} style={styles.point} />
            <Pressable>
              <Text style={styles.tncText}>Privacy Policy </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(Subscription);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006D77',
  },
  minContainer: {
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    gap: 25,
    marginTop: 15,
    marginBottom: 10,
  },
  crossIcon: {
    marginLeft: 15,
  },
  headText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  gradient: {
    borderWidth: 1,
    borderColor: '#F1F4FE40',
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  textBtn: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#006D77',
  },
  txtWrapper: {
    marginLeft: 120,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tncWrapper: {
    marginTop: 8,
    flexDirection: 'row',
  },
  tncText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: '#FFFFFF',
  },
  point: {
    width: 4,
    height: 4,
    margin: 10,
    marginTop: 6,
  },
});
