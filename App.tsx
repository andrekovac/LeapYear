import React, { useState } from "react";
import { Button as NativeButton } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

type StartButtonProps = {
  text: string;
  onPress: () => void;
};

const StartButton = ({ text, onPress }: StartButtonProps) => (
  <Button onPress={onPress}>
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  </Button>
);

const App = () => {
  const [hasPressedButton, setHasPressedButton] = useState(false);

  return (
    <Container>
      {hasPressedButton ? (
        <>
          <Text size={60}>{"You entered the App"}</Text>
          <NativeButton
            title={"Return"}
            color={"black"}
            onPress={() => setHasPressedButton(false)}
          />
        </>
      ) : (
        <>
          <Text size={80}>{"Leap Year"}</Text>
          <StartButton
            text={"Start"}
            onPress={() => setHasPressedButton(true)}
          />
        </>
      )}
      <StatusBar style="auto" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #ff0e64;
  padding: 10px;

  align-items: center;
  justify-content: space-evenly;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
`;

const Text = styled.Text<{ size?: number }>`
  font-size: ${(props) => (props.size ? `${props.size}px` : "30px")};
  font-weight: 100;
  text-align: center;
`;

const TextWrapper = styled.View`
  padding: 10px 0;
  background-color: white;
  border-radius: 35px;

  align-items: center;
`;

export default App;
