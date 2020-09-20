import React, { FunctionComponent, ReactChild } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Gradient: FunctionComponent<{
  children: ReactChild;
}> = ({ children, ...otherProps }) => (
  <LinearGradient
    colors={["#ff0e64", "#ffcc70"]}
    start={[0.1, 0.9]}
    end={[0.9, 0.1]}
    locations={[0.1, 1]}
    {...otherProps}
  >
    {children}
  </LinearGradient>
);

export default Gradient;
