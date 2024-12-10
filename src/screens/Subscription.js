import {memo} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ICONS from '../../constants/icons';

const Subscription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.minContainer}>
        <View style={styles.header}>
          <Pressable style={styles.crossIcon}>
            <Image source={ICONS.cross} style={{width: 32, height: 32}} />
          </Pressable>
          <Text style={styles.headText}>Unlock All Features</Text>
        </View>

        <View style={styles.planContainer}>
          <Text style={styles.planText}>Free Plan</Text>

          <View style={styles.rowItem}>
            <Image source={ICONS.check} style={{width: 14, height: 14}} />
            <Text>1 project & 10 images</Text>
          </View>
          <View style={styles.rowItem}>
            <Image source={ICONS.check} style={{width: 14, height: 14}} />
            <Text>1 PhotoLog Template</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Subscription);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006D77',
  },
  minContainer: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    gap: 45,
    marginTop: 15,
    marginBottom: 15,
  },
  crossIcon: {
    marginLeft: 15,
  },
  headText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#FFFFFF',
  },
  planContainer: {
    backgroundColor: '#F1F4FEE5',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#F1F4FEE5',
    marginTop: 10,
  },
  rowItem: {
    flexDirection: 'row',
  },

  planText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    color: '#006D77',
    paddingLeft: 10,
    paddingTop: 10,
    borderBottomWidth: 3,
  },
});
