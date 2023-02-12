import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";

export const fetchCoinName = createAsyncThunk(
  "FETCH_COIN_NAME",
  async (value: string) => {
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

interface NewCoin {
  id: string;
  amount: number;
  purchaseDate: Date;
}

export const addNewCoin = (newCoin: NewCoin) => {
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
  async (portfolio: []) => {
    try {
      const uniqueIds = new Set();
      const reducedPortfolio = portfolio.filter((item: { id: string }) => {
        if (uniqueIds.has(item.id)) {
          return false;
        } else {
          uniqueIds.add(item.id);
          return true;
        }
      });

      const currentData = await Promise.all(
        reducedPortfolio.map(
          async (coin: { id: string; purchaseDate: Date; amount: number }) => {
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
          }
        )
      );

      const historyData = await Promise.all(
        reducedPortfolio.map(async (coin: NewCoin) => {
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${
              coin.id
            }/history?date=${coin.purchaseDate
              .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
              .replace(/\//g, "-")}`
          );

          const reducedHistory = {
            historyPrice: data.market_data.current_price,
            id: data.id,
          };
          return reducedHistory;
        })
      );

      interface ObjectId {
        id: string;
      }

      const joinObjectId = [...currentData, ...historyData].reduce<ObjectId[]>(
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

export const removeCoin = (elementId: string) => {
  return {
    type: "REMOVE_COIN",
    elementId: elementId,
  };
};
