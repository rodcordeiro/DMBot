export function createBatch<T = unknown>(
  data: T[],
  batchLength: number = 10,
): Array<T[]> {
  const batch: [T[]] = [] as unknown as [T[]];
  let arr: T[] = [];
  data.map((item, index) => {
    if (arr.length === batchLength) {
      batch.push(arr);
      arr = [item];
      return;
    }
    if (index === data.length - 1) {
      arr.push(item);
      batch.push(arr);
      return;
    }
    arr.push(item);
    return;
  });
  return batch;
}
