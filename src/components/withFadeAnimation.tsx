import React, { ComponentType, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

type WithFadeAnimationProps = {
  /**
   * Whether fade-in animation should happen on mount
   */
  shouldFadeIn?: boolean;
  /**
   * Whether fade-out animation should happen on mount
   */
  shouldFadeOut?: boolean;
  /**
   * Callback to run right after fade-in animation
   */
  onMount?: () => void;
  /**
   * Callback to run right after fade-out animation
   */
  onUnMount?: () => void;
  /**
   * Speed of fade-in and fade-out animations in milliseconds
   */
  speed?: number;
};

/**
 * Higher Order Component which wraps a component to give it the ability to fade-in on mount and/or fade-out on onmount.
 */
const withFadeAnimation = ({
  shouldFadeIn = false,
  shouldFadeOut = false,
  onMount = () => {},
  onUnMount = () => {},
  speed = 500,
}: WithFadeAnimationProps) => <P extends object>(
  WrappedComponent: ComponentType<P>
) => (props: P) => {
  // Animated value of fade animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Interpolation outputRange - 0 and 1 switch when fading out
  const [outputRange, setOutputRange] = useState([0, 1]);

  useEffect(() => {
    shouldFadeIn && fadeIn();
    return () => {
      setOutputRange([1, 0]);
      shouldFadeOut && fadeOut();
    };
  }, []);

  const fadeIn = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: speed,
      useNativeDriver: true,
    }).start(() => {
      onMount();
    });
  };

  const fadeOut = () => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: speed,
      useNativeDriver: true,
    }).start(() => {
      onUnMount();
    });
  };

  return (
    <Animated.View
      style={{
        flex: 1,
        opacity: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange,
        }),
      }}
    >
      <WrappedComponent {...props} />
    </Animated.View>
  );
};

export default withFadeAnimation;
