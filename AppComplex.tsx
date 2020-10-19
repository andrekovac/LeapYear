import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  Button,
  Easing,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

import Text from "./src/components/Text";
import StartText from "./src/components/StartText";
import ResultText from "./src/components/ResultText";
import Gradient from "./src/components/Gradient";

import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  const [year, onChangeYear] = useState<string | undefined>(undefined);
  const [buttonPressed, setButtonPressed] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const elasticAnim = useRef(new Animated.Value(0)).current;

  const animatePress = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(elasticAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.bezier(0.42, 0.96, 0.53, 0.99),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const ResetButton = () => (
    <Animated.View
      style={{
        alignItems: "flex-end",
        padding: 10,
        opacity: fadeAnim,
        backgroundColor: "white",
      }}
    >
      <Button
        title={"Reset"}
        onPress={() => {
          setButtonPressed(false);
          onChangeYear(undefined);
          fadeAnim.setValue(0);
          elasticAnim.setValue(0);
        }}
      />
    </Animated.View>
  );

  const YearInput = () => (
    <BottomWrapper>
      <Bottom
        style={{
          opacity: fadeAnim,
        }}
      >
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        {buttonPressed ? (
          <>
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
          </>
        ) : (
          <WelcomeScreen
            hasPressedButton={buttonPressed}
            onPress={() => {
              setButtonPressed(true);
              animatePress();
            }}
          />
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}

const Container = styled.View`
  flex: 1;
`;

const Top = styled(LinearGradient)<{ borderRadius?: number }>`
  background-color: white;
  padding: ${Constants.statusBarHeight + 30}px 10px 30px 10px;

  /* alignment of children */
  justify-content: center;
  align-items: center;
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}px` : "0px"};
`;

const Bottom = styled(Animated.View)`
  flex: 1;
  background-color: white;
  padding: 10px;

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
  padding: 10px 0;

  font-size: 40px;
  text-align: center;
  font-weight: 100;
`;

const TextWrapper = styled.View`
  padding: 10px;
  background-color: white;
  width: 100%;
  border-radius: 35px;

  align-items: center;
`;
