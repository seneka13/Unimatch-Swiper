import React, {useCallback, useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {SwiperCard} from './SwiperCard';

const MySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const onSwiped = useCallback(
    (cardIndex: number) => {
      setActiveIndex(cardIndex + 1);
    },
    [setActiveIndex],
  );

  const renderCard = useCallback(
    (card: any, cardIndex: number) => {
      return (
        <SwiperCard
          card={card}
          cardIndex={cardIndex}
          activeIndex={activeIndex}
        />
      );
    },
    [activeIndex],
  );

  return (
    <Swiper
      ref={swiperRef}
      cards={cards}
      cardIndex={activeIndex}
      key={cards.length}
      renderCard={renderCard}
      onSwiped={onSwiped}
      onSwipedAll={() => setActiveIndex(0)}
      backgroundColor={'black'}
      cardStyle={styles.card}
      stackSize={cards.length}
      stackScale={3}
      stackSeparation={12}
      infinite={true}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#171717',
    justifyContent: 'center',
    backgroundColor: '#171717',
    height: 550,
    shadowColor: '#fff',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MySwiper;

const cards = [
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  {
    uri: require('../assets/videos/SampleVideo_720x480_20mb.mp4'),
  },
  // Add more video URLs as needed
];
