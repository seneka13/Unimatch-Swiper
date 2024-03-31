// Card.tsx
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Video from 'react-native-video'; // Replace with your actual import // Replace with your actual import
import VideoRef from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const SwiperCard = ({
  card,
  cardIndex,
  activeIndex,
}: {
  card: any;
  cardIndex: number;
  activeIndex: number;
}) => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<VideoRef>(null);

  const buttonStyle = useAnimatedStyle(() => {
    return {
      bottom: withTiming(isPaused ? 250 : 10, {
        duration: 800,
      }),
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(isPaused ? 1 : 0, {
        duration: 600,
      }),
      bottom: withTiming(isPaused ? 0 : -50, {
        duration: 600,
      }),
    };
  });

  const icon: string = isPaused ? 'play' : 'pause';

  return (
    <View style={styles.videoContainer}>
      <Video
        source={card.uri}
        style={styles.video}
        ref={videoRef}
        resizeMode="cover"
        paused={isPaused || activeIndex !== cardIndex}
        onError={(error: any) => console.log(error)}
      />
      <Animated.View style={[styles.videoOverlay, overlayStyle]}>
        <View style={styles.content}>
          <View style={styles.infoContainer}>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Ready to invest:</Text>
              <Text style={styles.infoValue}>$300k</Text>
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>Exits: </Text>
              <Text style={styles.infoValue}>17</Text>
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}>This year: </Text>
              <Text style={styles.infoValue}>6 deals</Text>
            </View>
            <View style={styles.infoCol}>
              <Text style={styles.infoLabel}> This year invest:</Text>
              <Text style={styles.infoValue}>$7 k </Text>
            </View>
          </View>
          <Text style={styles.infoText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iusto
            quos vitae nam deleniti iure sit quasi neque veniam recusandae.
          </Text>
        </View>
      </Animated.View>
      <Animated.View>
        <AnimatedTouchable
          onPress={() => setIsPaused(prevState => !prevState)}
          style={[styles.playButton, buttonStyle]}>
          <AnimatedIcon name={icon} size={25} color="#fff" />
        </AnimatedTouchable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  videoContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  videoOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 50,
    zIndex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  infoCol: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    lineHeight: 16,
    color: '#888888',
  },
  infoValue: {
    fontSize: 16,
    lineHeight: 20,
    color: '#D4D4D4',
  },
  infoText: {
    fontSize: 16,
    color: '#D4D4D4',
  },
});
