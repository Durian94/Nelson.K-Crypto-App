import { configureStore } from "@reduxjs/toolkit";
import homeData from "./Home/homeReducer";
import appReducer from "./app/appReducer";
import navbarData from "./navbar/navbarReducer";
import searchReducer from "./search/searchReducer";
import coinPageReducer from "./coinpage/coinpageReducer";
import portfolioReducer from "./portfolio/portfolioReducer";

export const store = configureStore({
  reducer: {
    homeData: homeData,
    localStorage: appReducer,
    navbarData: navbarData,
    searchData: searchReducer,
    coinPageData: coinPageReducer,
    portfolio: portfolioReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
