import React from "react";
import styled from "styled-components/native";

import Text from "./Text";

import { paddingNormal } from '../constants/style';

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
  padding: 0 ${paddingNormal};
  width: 100%;
`;

const TextWrapper = styled.View`
  padding: ${paddingNormal} 0;
  background-color: white;
  border-radius: 35px;

  align-items: center;
`;

export default StartButton;
