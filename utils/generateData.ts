export type GridRow = {
  id: string;
  title: string;
  cells: string[];
};

export function generateData(
  rowCount: number,
  columnCount: number,
  offset = 0
): GridRow[] {
  const data: GridRow[] = [];

  for (let i = offset; i < offset + rowCount; i++) {
    const row: GridRow = {
      id: `row-${i}`,
      title: `Row ${i + 1}`,
      cells: [],
    };

    for (let j = 0; j < columnCount; j++) {
      row.cells.push(`R${i + 1}C${j + 1}`);
    }

    data.push(row);
  }

  return data;
}
