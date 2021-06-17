import * as React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

const MyFabButton = () => (
  <FAB
    style={styles.fab}
    small
    icon="+"
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    padding: 20,
    right: 0,
    bottom: 0,
  },
});

export default MyFabButton;
