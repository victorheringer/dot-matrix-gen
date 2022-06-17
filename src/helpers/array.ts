export function createMatrix(
  height: number,
  width: number,
  content: string | boolean | number
) {
  return Array(height)
    .fill(content)
    .map(() => Array(width).fill(content));
}
