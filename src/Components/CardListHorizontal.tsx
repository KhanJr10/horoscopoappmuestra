import React, {memo, useCallback, useMemo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IZodialSings} from '../Services/interfaces';
import {primary} from '../../paletteColors.json';
import {addItemSelected} from '../Redux/Slice/itemSelectedSlice';
import {useDispatch} from 'react-redux';

interface ICardListHorizontal {
  row: IZodialSings;
}

const CardListHorizontal: React.FC<ICardListHorizontal> = ({row}) => {
  const dispatch = useDispatch();
  const name = useMemo<string>(() => row.name || '', [row.name]);

  const prediction = useMemo<string>(
    () => row.prediction || '',
    [row.prediction],
  );

  const image = useMemo<string>(() => row.image || '', [row.image]);

  const handleSelectedItem = useCallback(
    () => dispatch(addItemSelected(row)),
    [dispatch, row],
  );

  return (
    <TouchableOpacity style={styles.container} onPress={handleSelectedItem}>
      <View style={styles.subContainer}>
        <View style={styles.containerTop}>
          <View style={styles.containerImage}>
            <Image style={styles.logo} source={{uri: image}} />
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>{name}</Text>
          </View>
        </View>
        <View style={styles.containerPrediction}>
          <Text style={styles.textPrediction} numberOfLines={8}>
            {prediction}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardListHorizontal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary.purple,
    width: 230,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  subContainer: {
    height: '90%',
    width: '90%',
  },
  containerTop: {
    height: '35%',
    flexDirection: 'row',
  },
  containerImage: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: 50, height: 50},
  textTitle: {
    color: primary.text,
    fontSize: 20,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  textPrediction: {
    color: primary.text,
    fontSize: 14,
    flexShrink: 1,
  },
  containerPrediction: {maxHeight: '65%'},
});
