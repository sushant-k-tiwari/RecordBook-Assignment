import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedReaction,
  scrollTo,
} from "react-native-reanimated";

interface HeaderProps {
  columnCount: number;
  scrollX: Animated.SharedValue<number>;
}

const Header: React.FC<HeaderProps> = ({ columnCount, scrollX }) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  useAnimatedReaction(
    () => scrollX.value,
    (value) => {
      scrollTo(scrollRef, value, 0, false);
    }
  );

  const headers = Array.from({ length: columnCount }, (_, i) => `Col ${i + 1}`);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>#</Text>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        <View style={styles.cellContainer}>
          {headers.map((label, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.cellText}>{label}</Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#000",
    backgroundColor: "#fafafa",
  },
  title: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  titleText: {
    fontWeight: "bold",
  },
  cellContainer: {
    flexDirection: "row",
  },
  cell: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#ddd",
  },
  cellText: {
    fontWeight: "600",
  },
});
