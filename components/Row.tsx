import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedRef,
  scrollTo,
  useAnimatedReaction,
} from "react-native-reanimated";
import { GridRow } from "../utils/generateData";

interface Props {
  row: GridRow;
  scrollX: Animated.SharedValue<number>;
}

const Row: React.FC<Props> = ({ row, scrollX }) => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useAnimatedReaction(
    () => scrollX.value,
    (value) => {
      scrollTo(scrollRef, value, 0, false);
    }
  );

  return (
    <View style={styles.rowContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>{row.title}</Text>
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.cellContainer}>
          {row.cells.map((cell, index) => (
            <View key={index} style={styles.cell}>
              <Text style={styles.cellText}>{cell}</Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRightWidth: 1,
    borderColor: "#ddd",
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
    fontSize: 12,
  },
});

export default Row;
