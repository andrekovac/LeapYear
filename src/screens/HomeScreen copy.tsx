import React, { FunctionComponent, useEffect, useRef } from "react";
import { Animated, Button } from "react-native";
import styled from "styled-components/native";

import Text from "../components/Text";
import leapYearText from "../util/leapYear";
// import withFadeAnimation from "../components/withFadeAnimation";

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

const Wrapper = styled(Animated.View)`
  flex: 1;
  justify-content: space-evenly;
`;

// export default withFadeAnimation({
//   shouldFadeIn: true,
// })(HomeScreen);

export default withFadeAnimation({
  shouldFadeIn: true,
  speed: 500,
})(HomeScreen);


export default HomeScreen;
