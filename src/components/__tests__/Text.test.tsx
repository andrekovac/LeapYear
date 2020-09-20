import React from "react";
import renderer from "react-test-renderer";

import Text from "../Text";

describe("Text", () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Text />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with size prop`, () => {
    const tree = renderer.create(<Text size={100} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
