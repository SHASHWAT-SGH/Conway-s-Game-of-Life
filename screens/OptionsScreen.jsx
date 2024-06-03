import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import color from '../constants/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Card from '../components/Card';
import getAllGrids from '../utils/getAllGrids';

const OptionsScreen = () => {
  const [data, setData] = useState();

  const handleAsyncFetch = async () => {
    const arr = await getAllGrids();
    setData(arr);
  };

  useEffect(() => {
    handleAsyncFetch();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.2,
        }}>
        <Header />
      </View>
      <View
        style={{
          flex: 7,
        }}>
        <View style={styles.headingConatiner}>
          <Text style={styles.heading}>Saved Patterns</Text>
        </View>
        <View style={styles.cardsContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => <Card name={item.key} />}
            keyExtractor={item => item.key}
            style={styles.flatList}
          />
        </View>
      </View>
    </View>
  );
};

export default OptionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.color1,
  },
  headingConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(2),
  },
  heading: {
    color: color.white,
    fontSize: hp(3),
    fontWeight: '800',
  },
  cardsContainer: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    // backgroundColor: 'green',
  },
});
