import React from "react";
import renderer from "react-test-renderer";

import StartButton from "../StartButton";

it(`renders correctly`, () => {
  const tree = renderer
    .create(
      <StartButton text={"StartButton Snapshot Test"} onPress={() => {}} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
