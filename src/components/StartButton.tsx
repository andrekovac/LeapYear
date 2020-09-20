import React from "react";
import styled from "styled-components/native";

import Text from "./Text";

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

const Button = styled.TouchableOpacity`
  width: 100%;
`;

const TextWrapper = styled.View`
  padding: 10px 0;
  background-color: white;
  border-radius: 35px;

  align-items: center;
`;

export default StartButton;
