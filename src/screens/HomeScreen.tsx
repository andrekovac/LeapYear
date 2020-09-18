import React, { FunctionComponent, useEffect, useRef } from "react";
import { Animated, Button } from "react-native";

import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

import leapYearText from "../util/leapYear";

type HomeScreenProps = {
  onPress: () => void;
};

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ onPress }) => {
  // Animated value of fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeIn();
  }, []);

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Wrapper
      style={{
        opacity: fadeAnim,
      }}
    >
      <Text>{leapYearText(2020)}</Text>
      <Button title={"Return"} color={"black"} onPress={onPress} />
    </Wrapper>
  );
};

export default HomeScreen;
