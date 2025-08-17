export const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return { id: i, isSelected: i === 29_999_998 };
});

export const initialItems1 = new Array(100).fill(0).map((_, i) => {
  return { id: i, isSelected: i === 99 };
});
