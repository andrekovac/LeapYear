import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const App = () => {
  const [hasPressedButton, setHasPressedButton] = useState(false);

  return (
    <Container>
      {hasPressedButton ? (
        <HomeScreen onPress={() => setHasPressedButton(false)} />
      ) : (
        <WelcomeScreen onPress={() => setHasPressedButton(true)} hasPressedButton={hasPressedButton} />
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

export default App;
