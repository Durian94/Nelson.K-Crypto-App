import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNavbarData = createAsyncThunk(
  "FETCH_NAVBAR_DATA",
  async () => {
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");

      return data;
    } catch (err) {
      return err;
    }
  }
);
