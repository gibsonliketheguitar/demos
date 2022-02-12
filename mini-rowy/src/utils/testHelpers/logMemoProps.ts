import equal from "fast-deep-equal";

export function logMemoProps(prevProps: any, nextProps: any) {
  console.log("prevProps", prevProps, "nextProps", nextProps);
}

export function logCompareMemoProps(prev: any, next: any) {
  prev === next ? console.log(true) : console.log(false);
}

/**
 * Deep check of components props
 * If objects are same, return false which prevents React.Memo from re-rendering
 * @param prevProps previous component props
 * @param nextProps next component props
 * @returns boolean
 *
 * Issue with this is that function references are not compared correctly
 */
export function isObjectEqual(prevProps: {}, nextProps: {}): boolean {
  const result = equal(prevProps, nextProps) ? false : true;
  return result;
}
