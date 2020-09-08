import React, { FunctionComponent } from "react";

import Text from "../components/Text";
import StartButton from "../components/StartButton";

type WelcomeScreenProps = {
  onPress: () => void;
};

const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({ onPress }) => {
  return (
    <>
      <Text size={80}>{"Leap Year"}</Text>
      <StartButton text={"Start"} onPress={onPress} />
    </>
  );
};

export default WelcomeScreen;
