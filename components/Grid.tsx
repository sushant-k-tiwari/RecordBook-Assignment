import React from "react";
import { View, StyleSheet } from "react-native";
import { GridRow } from "../utils/generateData";
import { FlashList } from "@shopify/flash-list";
import Row from "./Row";
import Header from "./Header";
import { SharedValue } from "react-native-reanimated";

interface Props {
  data: GridRow[];
  scrollX: SharedValue<number>;
  loadMore: () => void;
}

const Grid: React.FC<Props> = ({ data, scrollX, loadMore }) => {
  const columnCount = data[0]?.cells?.length || 0;

  return (
    <View style={styles.container}>
      <Header columnCount={columnCount} scrollX={scrollX} />
      <FlashList
        data={data}
        estimatedItemSize={60}
        renderItem={({ item }) => <Row row={item} scrollX={scrollX} />}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Grid;
