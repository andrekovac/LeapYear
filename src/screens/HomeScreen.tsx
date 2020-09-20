import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef, FunctionComponent } from "react";
import {
  Animated,
  Button,
  Easing,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import styled from "styled-components/native";

import Text from "../components/Text";
import StartText from "../components/StartText";
import ResultText from "../components/ResultText";
import Gradient from "../components/Gradient";
import Wrapper from "../components/Wrapper";
import withFadeAnimation from "../components/withFadeAnimation";

import { paddingNormal } from "../constants/style";

type HomeScreenProps = {
  onPress: () => void;
};

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ onPress }) => {
  const [year, onChangeYear] = useState<string | undefined>(undefined);

  const elasticAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatePress();

    return () => {
      onChangeYear(undefined);
      elasticAnim.setValue(0);
    };
  }, []);

  const animatePress = () => {
    Animated.timing(elasticAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.bezier(0.42, 0.96, 0.53, 0.99),
      useNativeDriver: true,
    }).start();
  };

  const ResetButton = () => (
    <ResetButtonWrapper>
      <Button title={"Reset"} onPress={onPress} />
    </ResetButtonWrapper>
  );

  const YearInput = () => (
    <BottomWrapper>
      <Bottom>
        <TextWrapper>
          <Text>Enter any year</Text>
        </TextWrapper>
        <GradientWrapper>
          <Input
            onChangeText={(text) => {
              onChangeYear(text);
            }}
            value={year}
            selectionColor={"black"}
            placeholder={"2020"}
            maxLength={4}
            keyboardType={"numeric"}
          />
        </GradientWrapper>
      </Bottom>
      <ResetButton />
    </BottomWrapper>
  );

  return (
    <Wrapper>
      <Top
        colors={["#ff0e64", "#ffcc70"]}
        start={[0.6, 0.1]}
        locations={[1, 0.1]}
      >
        {typeof year === "string" ? (
          <ResultText year={year} />
        ) : (
          <StartText animation={elasticAnim} />
        )}
      </Top>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {YearInput()}
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </Wrapper>
  );
};

const Top = styled(LinearGradient)<{ borderRadius?: number }>`
  background-color: white;
  padding: ${Constants.statusBarHeight + 30}px ${paddingNormal} 30px
    ${paddingNormal};

  /* alignment of children */
  justify-content: center;
  align-items: center;
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "0px"};
`;

const Bottom = styled(Animated.View)`
  flex: 1;
  background-color: white;
  padding: ${paddingNormal};

  /* alignment of children */
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.View`
  flex: 1;
  background-color: #ff0e64;
`;

const GradientWrapper = styled(Gradient)<{ borderRadius?: number }>`
  width: 100%;

  justify-content: center;
  align-items: center;

  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "35px"};
`;

const Input = styled(TextInput)`
  padding: ${paddingNormal} 0;

  font-size: 40px;
  text-align: center;
  font-weight: 100;
`;

const TextWrapper = styled.View`
  padding: ${paddingNormal};
  background-color: white;
  width: 100%;
  border-radius: 35px;

  align-items: center;
`;

const ResetButtonWrapper = styled.View`
  padding: ${paddingNormal};
  background-color: white;
  align-items: flex-end;
`;

export default withFadeAnimation({
  shouldFadeIn: true,
  speed: 500,
})(HomeScreen);
