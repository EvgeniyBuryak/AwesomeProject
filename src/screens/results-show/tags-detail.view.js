import React, {useCallback} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const TagsDetail = ({list}) => {
  const keyExtractor = useCallback(item => item.id.toString(), []);
  const renderTags = useCallback(item => {
    return (
      <View>
        <Text style={styles.text}>tag {item.text}</Text>
      </View>
    );
  }, []);

  return (
    <FlatList
      data={[
        {text: 'Hello', id: 1},
        {text: 'Wolrd', id: 2},
      ]}
      keyExtractor={keyExtractor}
      renderItem={renderTags}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default TagsDetail;
