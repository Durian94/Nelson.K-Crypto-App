export const setTheme = () => {
  return { type: "SET_THEME" };
};

export const setCurrency = (value: string) => {
  return {
    type: "SET_CURRENCY",
    currency: value,
  };
};
