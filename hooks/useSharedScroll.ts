import { useSharedValue } from "react-native-reanimated";

export const useSharedScroll = () => {
  const scrollX = useSharedValue(0);
  return { scrollX };
};
