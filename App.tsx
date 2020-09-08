import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

type StartButtonProps = {
  text: string;
}

const StartButton = ({ text }: StartButtonProps) => (
  <Button onPress={() => console.log("Button pressed")}>
    <TextWrapper>
      <Text>{text}</Text>
    </TextWrapper>
  </Button>
);

const App = () => {
  return (
    <Container>
      <Text size={80}>{"Leap Year"}</Text>
      <StartButton text={"Start"} />
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
`;

const TextWrapper = styled.View`
  padding: 10px 0;
  background-color: white;
  border-radius: 35px;

  align-items: center;
`;

export default App;
