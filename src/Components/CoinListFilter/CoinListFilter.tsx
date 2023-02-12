import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { sortCoinList } from "../../store/Home/actions";

export default function CoinListFilter({ className }: { className?: string }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const sortType = location.search.split("=")[1];
  const [loading, setLoading] = useState(true);

  const handleSort = (e: any) => {
    dispatch(sortCoinList(e.target.value));
    navigate({
      search: `?sort=${e.target.value}`,
    });
  };

  useEffect(() => {
    if (location.search !== "") {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!loading && location.search !== "") {
      dispatch(sortCoinList(sortType));
      navigate({
        search: `?sort=${sortType}`,
      });
    }
    // eslint-disable-next-line
  }, [loading, location.search]);

  return (
    <div className={className}>
      <p>Sort By: </p>
      <select onChange={handleSort}>
        <option
          value="market_cap_asc"
          selected={sortType === "market_cap_asc" ? true : false}
        >
          Market Cap Asc
        </option>
        <option
          value="market_cap_desc"
          selected={sortType === "market_cap_desc" ? true : false}
        >
          Market Cap Desc
        </option>
        <option
          value="price_desc"
          selected={sortType === "price_desc" ? true : false}
        >
          Current Price Desc
        </option>
        <option
          value="price_asc"
          selected={sortType === "price_asc" ? true : false}
        >
          Current Price Asc
        </option>
        <option value="abc" selected={sortType === "abc" ? true : false}>
          Alphabetical
        </option>
        <option
          value="1h_desc"
          selected={sortType === "1h_desc" ? true : false}
        >
          Price change 1h Desc
        </option>
        <option value="1h_asc" selected={sortType === "1h_asc" ? true : false}>
          Price change 1h Asc
        </option>
        <option
          value="24h_desc"
          selected={sortType === "24h_desc" ? true : false}
        >
          Price change 24h Desc
        </option>
        <option
          value="24h_asc"
          selected={sortType === "24h_asc" ? true : false}
        >
          Price change 24h Asc
        </option>
        <option
          value="7d_desc"
          selected={sortType === "7d_desc" ? true : false}
        >
          Price change 7d Desc
        </option>
        <option value="7d_asc" selected={sortType === "7d_asc" ? true : false}>
          Price change 7d Asc
        </option>
      </select>
    </div>
  );
}
