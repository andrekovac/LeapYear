import React, { FunctionComponent } from "react";
import { Animated } from "react-native";

import Text from "./Text";

const StartText: FunctionComponent<{ animation: Animated.Value }> = ({
  animation,
}) => {
  const textTransform = (translation: number) => ({
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0.6, 1.6, 1],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [translation, 0],
        }),
      },
      { perspective: 1000 }, // without this line this Animation will not render on Android while working fine on iOS
    ],
  });
  return (
    <>
      <Text style={textTransform(-400)}>Is the year</Text>
      <Text size={90} style={textTransform(-300)}>
        ????
      </Text>
      <Text style={textTransform(-500)}>a leap year? 🤔</Text>
    </>
  );
};

export default StartText;
