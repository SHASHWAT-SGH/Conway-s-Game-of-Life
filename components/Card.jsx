import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import color from '../constants/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import loadGrid from '../utils/loadGrid';
import deleteGrid from '../utils/deleteGrid';
import {useNavigation} from '@react-navigation/native';
import showToast from '../utils/toast';

const Card = ({name, isDeletable, grid}) => {
  const navigation = useNavigation();
  const [deleted, setDeleted] = useState(false);

  const asyncLoadAndNavigate = async () => {
    const array = await loadGrid(name);
    showToast('Loaded ' + name);
    navigation.navigate('GameScreen', {
      grid: array,
    });
  };

  const navigateWithGridData = () => {
    showToast('Loaded ' + name);
    navigation.navigate('GameScreen', {
      grid: grid,
    });
  };

  return (
    !deleted && (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            onPress={isDeletable ? asyncLoadAndNavigate : navigateWithGridData}>
            <Text style={styles.text}>Load</Text>
          </TouchableOpacity>
          {isDeletable && (
            <TouchableOpacity
              onPress={() => {
                deleteGrid(name);
                setDeleted(true);
                showToast('Deleted ' + name);
              }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginVertical: wp(3),
    marginHorizontal: wp(4),
    borderRadius: wp(3),
    backgroundColor: color.color2,
    padding: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    gap: wp(4),
  },
  text: {
    color: color.white,
  },
});
