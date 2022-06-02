import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    borderColor: '#F0EEEE',
    borderWidth: 2,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconStyle: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  inputStyle: {
    borderColor: 'black',
    flex: 1,
  },
});

export default SearchBar;
