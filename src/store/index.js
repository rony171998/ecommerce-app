import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import news from "./slices/news.slice";

export default configureStore({
  reducer: {
    isLoading,
    news
  }
});
