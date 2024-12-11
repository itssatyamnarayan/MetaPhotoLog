import {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Template from '../../components/Template';
import ICONS from '../../../constants/icons';

const AllPhoto = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.minContainer}>
        <Template temp1={ICONS.template1} temp2={ICONS.template2} />
        <Template temp1={ICONS.template3} temp2={ICONS.template4} />
        <Template temp1={ICONS.template5} temp2={ICONS.template6} />
      </View>
    </ScrollView>
  );
};

export default memo(AllPhoto);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 7,
    backgroundColor: '#FFFFFF',
  },
  minContainer: {
    marginBottom: 40,
  },
});
