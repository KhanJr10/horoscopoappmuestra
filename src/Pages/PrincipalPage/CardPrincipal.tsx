/* eslint-disable react-native/no-inline-styles */
import React, {memo, useMemo, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {primary} from '../../../paletteColors.json';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';
import {IVideo, IZodialSings} from '../../Services/interfaces';
import {RootState} from '../../Redux/store';

const CardPrincipal: React.FC = () => {
  const videoRef = useRef<Video>(null);

  const videos = useSelector<RootState, IVideo>(state => state.video);

  const horoscopoToday = useSelector<RootState, IZodialSings | null>(
    state => state.itemSelecter.itemSelected,
  );

  const video = useMemo<string | undefined>(() => {
    if (!videos) {
      return undefined;
    }
    return videos.url;
  }, [videos]);

  const signo = useMemo<string>(
    () => horoscopoToday?.name || '',
    [horoscopoToday?.name],
  );

  const prediction = useMemo<string>(
    () => horoscopoToday?.prediction || '',
    [horoscopoToday?.prediction],
  );

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.containerTitle}>
          <View style={[styles.subContainerTitle, {width: '40%'}]}>
            <Video
              source={{uri: video}}
              ref={videoRef}
              style={styles.backgroundVideo}
              repeat={true}
            />
          </View>
          <View style={[styles.subContainerTitle, {width: '60%'}]}>
            <Text style={styles.textTitle}>{signo}</Text>
          </View>
        </View>
        <View style={styles.containerPrediction}>
          <Text style={styles.textPrediction}>{prediction}</Text>
        </View>
      </View>
    </View>
  );
};
export default memo(CardPrincipal);

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary.purple,
    height: '50%',
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: '80%',
    height: '80%',
  },
  containerTitle: {
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainerTitle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {color: primary.text, fontSize: 32, fontWeight: 'bold'},
  containerPrediction: {marginTop: '2%'},
  textPrediction: {
    textAlignVertical: 'center',
    color: primary.text,
    fontSize: 15,
    flexShrink: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },
});
