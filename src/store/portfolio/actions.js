import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

export const fetchCoinName = createAsyncThunk(
  "FETCH_COIN_NAME",
  async (value) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/search?query=${value}`
      );
      const list = _.map(data.coins, (obj) => ({
        ..._.pick(obj, ["id", "thumb"]),
      }));

      return list;
    } catch (err) {
      return err;
    }
  }
);

export const addNewCoin = (newCoin) => {
  return {
    type: "ADD_COIN",
    newCoin: newCoin,
  };
};

export const resetSearch = () => {
  return {
    type: "RESET",
  };
};

export const fetchPortfolioData = createAsyncThunk(
  "FETCH_PORTFOLIO_DATA",
  async (portfolio) => {
    try {
      const uniqueIds = new Set();
      const reducedPortfolio = portfolio.filter((item) => {
        if (uniqueIds.has(item.id)) {
          return false;
        } else {
          uniqueIds.add(item.id);
          return true;
        }
      });

      const currentData = await Promise.all(
        reducedPortfolio.map(async (coin) => {
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false&community_data=false&developer_data=false&sparkline=false`
          );

          const coinData = {
            id: data.id,
            image: data.image.small,
            symbol: data.symbol,
            currentPrice: data.market_data.current_price,
            change_24: data.market_data.price_change_24h_in_currency,
            purchaseDate: coin.purchaseDate,
            amount: coin.amount,
            marketCap: data.market_data.market_cap,
            totalVolume: data.market_data.total_volume,
            maxSupply: data.market_data.max_supply,
            circSupply: data.market_data.circulating_supply,
          };
          return coinData;
        })
      );

      const historyData = await Promise.all(
        reducedPortfolio.map(async (coin) => {
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${
              coin.id
            }/history?date=${coin.purchaseDate
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .replaceAll("/", "-")}`
          );

          const reducedHistory = {
            historyPrice: data.market_data.current_price,
            id: data.id,
          };
          return reducedHistory;
        })
      );

      const joinObjectId = [...currentData, ...historyData].reduce(
        (acc, item) => {
          const existing = acc.find((d) => d.id === item.id);

          if (existing) {
            Object.assign(existing, item);
          } else {
            acc.push(item);
          }
          return acc;
        },
        []
      );

      return joinObjectId;
    } catch (err) {
      return err;
    }
  }
);

export const removeCoin = (elementId) => {
  return {
    type: "REMOVE_COIN",
    elementId: elementId,
  };
};
