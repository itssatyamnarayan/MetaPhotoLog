import {memo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Template from '../../components/Template';
import ICONS from '../../../constants/icons';

const Photo_Four = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.minContainer}>
        <Template temp1={ICONS.template1} temp2={ICONS.template2} />
        <Template temp1={ICONS.template3} temp2={ICONS.template4} />
      </View>
    </ScrollView>
  );
};

export default memo(Photo_Four);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  minContainer: {
    marginBottom: 40,
  },
});
