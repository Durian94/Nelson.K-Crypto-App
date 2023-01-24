export const setTheme = () => {
  return { type: "SET_THEME" };
};

export const setCurrency = (value) => {
  return {
    type: "SET_CURRENCY",
    currency: value,
  };
};
