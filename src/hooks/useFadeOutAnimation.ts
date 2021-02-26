import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

type UseFadeOutAnimationProps = {
  onUnmountCallback?: () => void;
};

const useFadeOutAnimation = ({
  onUnmountCallback = () => {},
}: UseFadeOutAnimationProps) => {
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);

  // This animation value will change the opacity value from 1 to 0. So we initialize it with the value 1.
  const fadeOutAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (shouldStartAnimation) {
      fadeOut();
    }
    return () => {
      // useEffect cleanup function: reset animation value
      fadeOutAnim.setValue(1);
    };
  }, [shouldStartAnimation]);

  const fadeOut = () => {
    Animated.timing(fadeOutAnim, {
      // fade out will change the opacity from 1 to 0
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      // The onMountCallback is called right after the animation finished.
    }).start(onUnmountCallback);
  };

  const opacityStyle = {
    opacity: fadeOutAnim,
  };

  // A function to trigger the fade out animation
  const startAnimation = () => setShouldStartAnimation(true);

  return [opacityStyle, startAnimation] as const;
};

export default useFadeOutAnimation;
