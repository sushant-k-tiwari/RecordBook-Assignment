# RecordBook-Assignment
# Virtualized 2D Data Grid in React Native

A high-performance scrollable 2D data grid built using React Native. This project is designed to efficiently handle extremely large datasets (100,000 rows × 500 columns) using vertical and horizontal virtualization.

---

## Objective

To build a responsive and optimized 2D grid for mobile devices that simulates the real-world requirements of data-heavy applications like CRMs, spreadsheet editors, or admin dashboards — without compromising on smooth performance, even on mid-range devices.

---

## My Approach

1. **Tech Stack**:
   - `React Native` with `Expo`
   - `FlashList` for vertical row virtualization
   - `FlatList` for rendering columns inside each row
   - `Reanimated` & `PanGestureHandler` for shared horizontal scroll control
   - `TypeScript` for type safety

2. **Architecture**:
   - Each **row** is a component that contains a **horizontal FlatList** for cells.
   - A **shared horizontal scroll** is implemented using Reanimated's `SharedValue`.
   - A **sticky header** is rendered separately to stay fixed during vertical scroll.
   - **Lazy loading** is implemented: 100 rows are rendered initially, and more are added when the user scrolls to the bottom.

3. **Data Generation**:
   - Since no backend was involved, I used a utility `generateData()` function to dynamically create mock data rows and cells in batches.

---

## Key Optimizations

- **FlashList** for vertical virtualization of 100,000 rows.
- **Memoization** and separation of components like `<Row />`, `<Header />` to avoid unnecessary re-renders.
- **Shared horizontal scroll** for synchronized scrolling across header and all rows.
- **Lazy Loading** using scroll threshold: 100 rows loaded initially, more added as user scrolls.
- **Efficient list rendering** using `estimatedItemSize` and flat key structure.

---

## Trade-offs & Assumptions

- **In-memory data generation** was used instead of RealmDB or SQLite to simplify development inside Expo Go.
- Currently, **all columns are rendered per row**, which might impact performance for very wide grids (e.g., 500 columns). Next step would be column-level virtualization.
- Used **TypeScript** with basic interfaces for clarity but avoided too much strict typing to keep development fast.
- Scroll sync assumes uniform cell widths for simplicity.

---

## Screenshots and Video
### Demo Video
<video src="./Record Book.webm" controls width="600" />
![Image 1](https://github.com/user-attachments/assets/5b2c2b8f-d148-4f22-9797-ab35e2f16531)



---
