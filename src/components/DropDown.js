import {memo, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {View, Text, StyleSheet, Platform} from 'react-native';

const DropDown = ({dataItems}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectedValue = value => {
    setSelectedValue(value);
  };
  return (
    <View style={styles.dropDownContainer}>
      <Dropdown
        placeholder="Select Project"
        data={dataItems}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onChange={item => {
          handleSelectedValue(item.value);
        }}
        search
        searchPlaceholder="Search..."
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        inputSearchStyle={styles.searchStyle}
        iconStyle={styles.icon}
        containerStyle={styles.container}
      />
    </View>
  );
};

export default memo(DropDown);

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: '#F8F8F8',
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 10,
  },
  container: {
    borderRadius: 8,
  },
  placeholder: {
    fontFamily: 'OpenSans-Regular',
  },
  selectedText: {
    fontFamily: 'OpenSans-Regular',
  },
  searchStyle: {
    fontFamily: 'OpenSans-Regular',
    borderRadius: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
