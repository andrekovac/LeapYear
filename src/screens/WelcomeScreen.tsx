import React, { useEffect, useRef, FunctionComponent } from "react";
import { Animated, Easing } from "react-native";
import styled from "styled-components/native";

import Text from "../components/Text";

type WelcomeScreenProps = {
  onPress: () => void;
  hasPressedButton: boolean;
};

const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({
  onPress,
  hasPressedButton,
}) => {
  const introAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(-300)).current;

  useEffect(() => {
    bounceIn();
    return () => {
      introAnim.setValue(0);
    };
  }, [hasPressedButton]);

  const bounceIn = () => {
    Animated.parallel([
      Animated.timing(introAnim, {
        toValue: 1,
        duration: 1200,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 1200,
        easing: Easing.bounce,
        useNativeDriver: true,
      })
    ])
    .start();
  };

  return <Wrapper>
  <Text
    style={{
      transform: [
        {
          rotate: introAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['60deg', '0deg'],
          }),
        },
        {
          translateY: translateAnim
        }
      ],
    }}
  >
    LeapYear
  </Text>
  <StyledButton onPress={onPress}>
    <TextWrapper>
      <Text>Start</Text>
    </TextWrapper>
  </StyledButton>
</Wrapper>;
};

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  background-color: #ff0e64;
`;

const StyledButton = styled.TouchableOpacity`
  width: 100%;
`;

const TextWrapper = styled.View`
  padding: 10px;
  background-color: white;
  border-radius: 35px;

  align-items: center;
`;

export default WelcomeScreen;
