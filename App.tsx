import React from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const App = () => {
  return (
    <Container>
      <Text size={80}>{"Leap Year"}</Text>
      <Button onPress={() => console.log("Button pressed")}>
        <TextWrapper>
          <Text>Start</Text>
        </TextWrapper>
      </Button>
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
