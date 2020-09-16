import React, { FunctionComponent } from "react";

import Welcome from "../components/Welcome";

type WelcomeScreenProps = {
  onPress: () => void;
  hasPressedButton: boolean;
};

const WelcomeScreen: FunctionComponent<WelcomeScreenProps> = ({
  onPress,
  hasPressedButton,
}) => {
  return <Welcome onPress={onPress} buttonPressed={hasPressedButton} />;
};

export default WelcomeScreen;
