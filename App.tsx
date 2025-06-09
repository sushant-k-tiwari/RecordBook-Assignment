import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { generateData, GridRow } from "./utils/generateData";
import Grid from "./components/Grid";
import { useSharedScroll } from "./hooks/useSharedScroll";

const INITIAL_ROWS = 100;
const BATCH_SIZE = 100;
const COLUMN_COUNT = 50;
const TOTAL_ROWS = 100_000;

export default function App() {
  const [data, setData] = useState<GridRow[]>([]);
  const [offset, setOffset] = useState(0);
  const { scrollX } = useSharedScroll();

  useEffect(() => {
    const initial = generateData(INITIAL_ROWS, COLUMN_COUNT, 0);
    setData(initial);
    setOffset(INITIAL_ROWS);
  }, []);

  const loadMoreData = () => {
    if (offset >= TOTAL_ROWS) return;

    const nextBatch = generateData(BATCH_SIZE, COLUMN_COUNT, offset);
    setData((prev) => [...prev, ...nextBatch]);
    setOffset((prev) => prev + BATCH_SIZE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Grid data={data} scrollX={scrollX} loadMore={loadMoreData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
