import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Animated } from "react-native";

import Text from "./Text";

import { isLeapYear } from "../util/leapYear";

const ResultText: FunctionComponent<{ year?: string }> = ({ year }) => {
  const springAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    letterJump();
    return () => {
      springAnim.setValue(0);
    };
  }, [year]);

  const letterJump = useCallback(() => {
    Animated.spring(springAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Text>The year</Text>
      <Text
        style={{
          transform: [
            {
              scale: springAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0.9, 1.1, 1],
              }),
            },
          ],
        }}
        size={90}
      >
        {year || "0"}
      </Text>
      <Text>
        {year && isLeapYear(parseInt(year, 10))
          ? "is a leap year 🎉!"
          : "is no leap year 😕."}
      </Text>
    </>
  );
};

export default ResultText;
