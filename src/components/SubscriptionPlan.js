import {memo, useState} from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import ICONS from '../../constants/icons';

const SubscriptionPlan = ({plan, benefit1, benefit2, isPlan}) => {
  const [pressed, setPressed] = useState(false);

  const handleSelectPlan = () => {
    setPressed(!pressed);
  };

  const purchasePlan = () => {
    if (isPlan && isPlan === 'standard') {
      return (
        <View style={styles.selectPlanWrapper}>
          <Pressable style={styles.selectPlan} onPress={handleSelectPlan}>
            {pressed ? (
              <Image
                source={ICONS.selectedCircle}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={ICONS.unSelectedCircle}
                style={{width: 20, height: 20}}
              />
            )}
            <Text style={styles.selectText}>One time purchase</Text>
          </Pressable>

          <Text style={styles.selectPlanText}>$4.99</Text>
        </View>
      );
    } else if (isPlan && isPlan === 'professional') {
      return (
        <>
          <View style={styles.selectPlanWrapper}>
            <Pressable style={styles.selectPlan} onPress={handleSelectPlan}>
              {pressed ? (
                <Image
                  source={ICONS.selectedCircle}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={ICONS.unSelectedCircle}
                  style={{width: 20, height: 20}}
                />
              )}
              <Text style={styles.selectText}>Monthly</Text>
            </Pressable>

            <Text style={styles.selectPlanText}>
              $2.99<Text style={styles.price}>/month</Text>
            </Text>
          </View>
          <View style={styles.selectPlanWrapper}>
            <Pressable style={styles.selectPlan} onPress={handleSelectPlan}>
              {!pressed ? (
                <Image
                  source={ICONS.selectedCircle}
                  style={{width: 20, height: 20}}
                />
              ) : (
                <Image
                  source={ICONS.unSelectedCircle}
                  style={{width: 20, height: 20}}
                />
              )}
              <Text style={styles.selectText}>Yearly</Text>
            </Pressable>

            <Text style={styles.selectPlanText}>
              $23.88<Text style={styles.price}>/year</Text>
            </Text>
          </View>
        </>
      );
    } else if (isPlan && isPlan === 'enterprise') {
      return (
        <Pressable style={styles.infoBtn}>
          <Image source={ICONS.info} style={{width: 14, height: 14}} />
          <Text style={[styles.price, {color: '#292D32'}]}>More info</Text>
        </Pressable>
      );
    } else {
      null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.planContainer}>
        <View style={styles.planTextWrapper}>
          <Text style={styles.planText}>{plan}</Text>
        </View>
        <View style={styles.rowItem}>
          <Image source={ICONS.check} style={{width: 14, height: 14}} />
          <Text style={styles.text}>{benefit1}</Text>
        </View>
        <View style={styles.rowItem}>
          <Image source={ICONS.check} style={{width: 14, height: 14}} />
          <Text style={styles.text}>{benefit2}</Text>
        </View>
        {purchasePlan()}
      </View>
    </View>
  );
};

export default memo(SubscriptionPlan);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  planContainer: {
    backgroundColor: '#F1F4FEE5',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#F1F4FEE5',
    marginTop: 5,
  },
  rowItem: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  planTextWrapper: {
    marginLeft: 10,
    paddingTop: 10,
    alignSelf: 'flex-start',
    borderBottomWidth: 8,
    borderColor: '#CEE4E4',
    marginBottom: 15,
  },
  planText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#006D77',
    marginBottom: -8,
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#292D32',
    marginLeft: 10,
  },
  selectPlanWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 4,
  },
  selectPlan: {
    flexDirection: 'row',
    gap: 10,
  },
  selectPlanText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#006D77',
  },
  selectText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: '#006D77',
  },
  price: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  infoBtn: {
    borderRadius: 25,
    backgroundColor: '#016D771F',
    flexDirection: 'row',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
    gap: 8,
    paddingHorizontal: 8,
    paddingTop: 3,
  },
});
