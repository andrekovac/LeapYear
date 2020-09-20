import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

type UseFadeOutAnimationProps = {
  onUnmountCallback?: () => void;
};

const useFadeOutAnimation = ({
  onUnmountCallback = () => {},
}: UseFadeOutAnimationProps) => {
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);

  const fadeOutAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (shouldStartAnimation) {
      fadeOut();
    }
    return () => {
      fadeOutAnim.setValue(0);
    };
  }, [shouldStartAnimation]);

  const fadeOut = () => {
    Animated.timing(fadeOutAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(onUnmountCallback);
  };

  const opacityStyle = {
    opacity: fadeOutAnim,
  };
  const startAnimation = () => setShouldStartAnimation(true);
  return [opacityStyle, startAnimation] as const;
};

export default useFadeOutAnimation;
