import React, { FunctionComponent } from "react";
import { Button } from "react-native";

import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import withFadeAnimation from "../components/withFadeAnimation";

import leapYearText from "../util/leapYear";

type HomeScreenProps = {
  onPress: () => void;
};

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ onPress }) => {
  return (
    <Wrapper>
      <Text>{leapYearText(2020)}</Text>
      <Button title={"Return"} color={"black"} onPress={onPress} />
    </Wrapper>
  );
};

export default withFadeAnimation({
  shouldFadeIn: true,
  speed: 500,
})(HomeScreen);
