import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

export const fetchSearchResults = createAsyncThunk(
  "FETCH_SEARCH_DATA",
  async (value) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${value}`
      );
      const list = _.map(data.coins, (obj) => ({
        ..._.pick(obj, ["id", "thumb", "name", "symbol"]),
      }));

      return list;
    } catch (err) {
      return err;
    }
  }
);
